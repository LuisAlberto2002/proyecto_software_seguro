import * as React from "react";
import Button from "@mui/material/Button";

export default function CustomButton({
  text,
  onClick,
  variant = "contained",
  color = "primary",
  sx = {},
}) {
  return (
    <Button variant={variant} color={color} onClick={onClick} sx={sx}>
      {text}
    </Button>
  );
}
