import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <div>
      {isMobile ? (
        <p>Está en un dispositivo móvil</p>
      ) : (
        <p>Está en un dispositivo de escritorio</p>
      )}
    </div>
  );
};

export default Navbar;
