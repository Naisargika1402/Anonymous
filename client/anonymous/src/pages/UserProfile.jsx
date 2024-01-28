import React, { useEffect, useRef, useState } from "react";
import UserHeader from "./UserHeader";
import Footer from "../components/Footer";

function UserProfile() {
  return (
    <div>
      <UserHeader
        searchInput={searchInput}
        findMyLocation={findMyLocation}
      ></UserHeader>
      Hello I am No one
      <Footer />
    </div>
  );
}

export default UserProfile;
