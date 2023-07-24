import React from "react";
import { TextField,MenuItem,Select, FormControl } from "@mui/material";
import './multistep.css'

const StepOne = ({ formData, setFormData }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <form>
        <label>Hackathon Name* (You can change later)</label>
      <TextField  style={{marginBottom:"16px"  }}
      //  label="Hackathon Name (You can change later)"
        name="hackathonName"
        value={formData.hackathonName}
        placeholder="eg: Design & Development "
        onChange={handleChange}
        fullWidth
        required
      />
      <label>University/College Name* (You are representing)</label>
      <TextField style={{ marginBottom: "16px" }}
        //label="University/College Name* (You are representing)"
        name="universityName"
        value={formData.universityName}
        placeholder="eg: Bundelkhan University"
        onChange={handleChange}
        fullWidth
        required
      />
       <label>Hackathon Mode</label>
       <FormControl fullWidth>
      
       <Select style={{ marginBottom: "16px" }}
      
        name="hackathonMode"
        value={formData.hackathonMode}
        placeholder="Online"      
        onChange={handleChange}
        fullWidth
        required
      >
      
       <MenuItem value="online">Online</MenuItem>
       <MenuItem value="remote">Remote</MenuItem>
        </Select>
        </FormControl>
    </form>
  );
};

export default StepOne;
