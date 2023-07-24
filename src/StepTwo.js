import React from "react";
import { TextField } from "@mui/material";

import './multistep.css'

const StepTwo = ({ formData, setFormData }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <form>
        <label>Hackathon Theme</label>
      <TextField style={{ marginBottom: "16px" }}
       // label="Hackathon Theme"
        name="hackathonTheme"
        value={formData.hackathonTheme}
        placeholder="eg: Design & ML"
        onChange={handleChange}
        fullWidth
        required
      />
      <label>"Hackathon Overview</label>
      <TextField style={{ margin: "6px" }}
       // label="Hackathon Overview"
        name="hackathonOverview"
        value={formData.hackathonOverview}
        multiline // This enables the textarea functionality
        rows={5} // You can adjust the number of rows displayed in the textarea
        onChange={handleChange}
        fullWidth
        required
      />
    </form>
  );
};

export default StepTwo;
