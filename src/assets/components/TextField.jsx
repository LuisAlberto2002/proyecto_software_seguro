import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function CustomTextFields({
  fields,
  spacing = 1,
  width = "25ch",
}) {
  return (
    <Box sx={{ "& > :not(style)": { m: spacing, width } }}>
      {fields.map((field, index) => (
        <TextField
          key={index}
          id={field.id}
          label={field.label}
          variant={field.variant || "outlined"}
          type={field.type || "text"}
          error={field.error}
          helperText={field.helperText}
          onChange={field.onChange}
          InputProps={field.InputProps}
        />
      ))}
    </Box>
  );
}
