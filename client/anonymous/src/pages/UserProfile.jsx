import React, { useEffect, useRef, useState } from "react";
import UserHeader from "./UserHeader";
import Footer from "../components/Footer";
import axios from "axios";
const apiKey = "AIzaSyDKc-PxciHbJWqufj9dakp14I9aCuxw1oc";
const mapApiJs = "https://maps.googleapis.com/maps/api/js";
const geocodeJson = "https://maps.googleapis.com/maps/api/geocode/json";

function UserProfile() {
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const loggedInUserEmail = localStorage.getItem("loggedInUserEmail");

        if (loggedInUserEmail) {
          const response = await axios.post(
            "http://localhost:4000/getUserDetails",
            {
              email: loggedInUserEmail,
            }
          );

          setUserDetails(response.data);
        } else {
          console.log("Email id not available");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchUserDetails();
  }, []);

  const searchInput = useRef(null);
  const [address, setAddress] = useState({});

  // init gmap script
  const initMapScript = () => {
    // if script already loaded
    if (window.google) {
      return Promise.resolve();
    }
    const src = `${mapApiJs}?key=${apiKey}&libraries=places&v=weekly`;
    return loadAsyncScript(src);
  };

  // do something on address change
  const onChangeAddress = (autocomplete) => {
    const place = autocomplete.getPlace();
    setAddress(extractAddress(place));
  };

  // init autocomplete
  const initAutocomplete = () => {
    if (!searchInput.current) return;

    const autocomplete = new window.google.maps.places.Autocomplete(
      searchInput.current
    );
    autocomplete.setFields(["address_component", "geometry"]);
    autocomplete.addListener("place_changed", () =>
      onChangeAddress(autocomplete)
    );
  };

  const reverseGeocode = ({ latitude: lat, longitude: lng }) => {
    const url = `${geocodeJson}?key=${apiKey}&latlng=${lat},${lng}`;
    searchInput.current.value = "Getting your location...";
    fetch(url)
      .then((response) => response.json())
      .then((location) => {
        const place = location.results[0];
        const _address = extractAddress(place);
        setAddress(_address);
        searchInput.current.value = _address.plain();
      });
  };

  const findMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        reverseGeocode(position.coords);
      });
    }
  };

  // Extract the first name from the full name
  const firstName = userDetails.name ? userDetails.name.split(" ")[0] : "";

  // Extract address from Google Places API response
  function extractAddress(place) {
    const address = {
      plot: "",
      locality: "",
      zone: "",
      city: "",
      state: "",
      zip: "",
      country: "",
      plain() {
        const locality = this.locality ? this.locality + ", " : "";
        const city = this.city ? this.city + ", " : "";
        const state = this.state ? this.state + ", " : "";
        return locality + city + state + this.country;
      },
    };

    if (!Array.isArray(place?.address_components)) {
      return address;
    }

    place.address_components.forEach((component) => {
      const types = component.types;
      const value = component.long_name;

      if (types.includes("plus_code")) {
        address.plot = value;
      }

      if (types.includes("sublocality_level_2")) {
        address.locality = value;
      }

      if (types.includes("sublocality_level_1")) {
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

  return (
    <>
      <UserHeader searchInput={searchInput} findMyLocation={findMyLocation} />
      <div className="container mt-5">
        <div className="card text-center mb-4">
          <div className="card-body">
            <h2 className="card-title">Hello, {firstName}</h2>
            <hr />
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <span style={{ color: "#F28500" }}>User ID:</span>{" "}
                {userDetails._id}
              </li>
              <li className="list-group-item">
                <span style={{ color: "#F28500" }}>Full Name:</span>{" "}
                {userDetails.name}
              </li>
              <li className="list-group-item">
                <span style={{ color: "#F28500" }}>Email:</span>{" "}
                {userDetails.email}
              </li>
              <li className="list-group-item">
                <span style={{ color: "#F28500" }}>Phone Number:</span>{" "}
                {userDetails.phoneNumber}
              </li>
              <li className="list-group-item">
                <span style={{ color: "#F28500" }}>Age:</span> {userDetails.age}
              </li>
              <li className="list-group-item">
                <span style={{ color: "#F28500" }}>Gender:</span>{" "}
                {userDetails.gender}
              </li>
              <li className="list-group-item">
                <span style={{ color: "#F28500" }}>Address:</span>{" "}
                {userDetails.address}
              </li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default UserProfile;
