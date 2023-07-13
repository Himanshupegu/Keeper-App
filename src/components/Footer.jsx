import React from "react";

function Footer() {
  const name = "Himanshu";
  var currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Created by {name}</p>
      <p>Copyright ⓒ {currentYear}</p>
    </footer>
  );
}

export default Footer;
