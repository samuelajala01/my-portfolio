import { useState, useEffect } from "react";
import axios from "axios";

const Footer = () => {
  const [visits, setVisits] = useState(0);

  useEffect(() => {
    axios
      .get("https://api.countapi.xyz/hit/samuelajala.vercel.app/visits")
      .then((response) => {
        // Check if the response data is already an object
        const data =
          typeof response.data === "string"
            ? JSON.parse(response.data)
            : response.data;
        setVisits(data.value);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <footer>
      <p>
        &copy; <span id="footer-year"></span> Samuel Ajala
      </p>
      <p>site views: {visits}</p>
    </footer>
  );
};

export default Footer;
