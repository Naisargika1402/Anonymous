import React, {useEffect, useRef, useState} from 'react'
import UserHeader from './UserHeader';
import HomeServices from '../components/HomeServices';
import Container from '../styles/Container';
import "../css files/UserPage.css";
import { Search } from "@material-ui/icons"

const apiKey = 'AIzaSyDKc-PxciHbJWqufj9dakp14I9aCuxw1oc';
const mapApiJs = 'https://maps.googleapis.com/maps/api/js';
const geocodeJson = 'https://maps.googleapis.com/maps/api/geocode/json';


// load google map api js

function loadAsyncScript(src) {
  return new Promise(resolve => {
    const script = document.createElement("script");
    Object.assign(script, {
      type: "text/javascript",
      async: true,
      src
    })
    script.addEventListener("load", () => resolve(script));
    document.head.appendChild(script);
  })
}

const extractAddress = (place) => {
  console.log(place);
  const address = {
    plot: "",
    locality: "",
    zone: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    plain() {
      const locality = this.locality ? this.locality+ ", " : "";
      const city = this.city ? this.city + ", " : "";
      const state = this.state ? this.state + ", " : "";
      return locality + city + state + this.country;
    }
  }

  if (!Array.isArray(place?.address_components)) {
    return address;
  }

  place.address_components.forEach(component => {
    const types = component.types;
    const value = component.long_name;

    if(types.includes("plus_code")){
      address.plot = value;
    }

    if(types.includes("sublocality_level_2")){
      address.locality = value;
    }

    if(types.includes("sublocality_level_1")){
      address.zone = value;
    }

    if (types.includes("locality")) {
      address.city = value;
    }

    if (types.includes("administrative_area_level_1")) {
      address.state = value;
    }

    if (types.includes("postal_code")) {
      address.zip = value;
    }

    if (types.includes("country")) {
      address.country = value;
    }

  });

  return address;
}


function UserPage() {

  const searchInput = useRef(null);
  const [address, setAddress] = useState({});


  // init gmap script
  const initMapScript = () => {
    // if script already loaded
    if(window.google) {
      return Promise.resolve();
    }
    const src = `${mapApiJs}?key=${apiKey}&libraries=places&v=weekly`;
    return loadAsyncScript(src);
  }

  // do something on address change
  const onChangeAddress = (autocomplete) => {
    const place = autocomplete.getPlace();
    setAddress(extractAddress(place));
  }

  // init autocomplete
  const initAutocomplete = () => {
    if (!searchInput.current) return;

    const autocomplete = new window.google.maps.places.Autocomplete(searchInput.current);
    autocomplete.setFields(["address_component", "geometry"]);
    autocomplete.addListener("place_changed", () => onChangeAddress(autocomplete));

  }


  const reverseGeocode = ({ latitude: lat, longitude: lng}) => {
    const url = `${geocodeJson}?key=${apiKey}&latlng=${lat},${lng}`;
    searchInput.current.value = "Getting your location...";
    fetch(url)
        .then(response => response.json())
        .then(location => {
          const place = location.results[0];
          const _address = extractAddress(place);
          setAddress(_address);
          searchInput.current.value = _address.plain();
        })
  }


  const findMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        reverseGeocode(position.coords)
      })
    }
  }

  // load map script after mounted
  useEffect(() => {
    initMapScript().then(() => initAutocomplete())
  }, []);



  return(
    <Container>
      <UserHeader searchInput={searchInput} findMyLocation={findMyLocation}></UserHeader>
      <h1 className='userheading'>Services You're Looking For...</h1>
      <div className='mainsearch'>
        <input placeholder='search for services'
        />
        <Search></Search>
      </div>
      <HomeServices></HomeServices>
    </Container>
  )
  
}

export default UserPage;