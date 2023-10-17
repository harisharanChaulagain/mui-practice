import { Box, TextField, MenuItem } from "@mui/material";
import React, { useState } from "react";

const MuiSelect = () => {
  const [country, setCountry] = useState<string[]>([]);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountry(typeof value === "string" ? value.split(",") : value);
  };
  return (
    <Box width="250px">
      <TextField
        label="Select Country"
        select
        value={country}
        onChange={handleChange}
        fullWidth
        SelectProps={{
          multiple: true,
        }}
        size="small"
        color="secondary"
        helperText="Please select your countries"
      >
        <MenuItem value="Nep">Nepal</MenuItem>
        <MenuItem value="In">India</MenuItem>
        <MenuItem value="Ch">China</MenuItem>
      </TextField>
    </Box>
  );
};

export default MuiSelect;
