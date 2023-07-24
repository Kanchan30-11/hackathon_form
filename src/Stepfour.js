import React from "react";
import { Select,MenuItem, FormControl } from "@mui/material";
import './multistep.css'

const StepFour = ({ formData, setFormData }) => {
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };

  return (
    <div>
        <form>
            <label>Who can participate?</label>
            <FormControl fullWidth>
     <Select style={{ marginTop: "16px" }}
         // label="Who can participate?*"
          name="participants"
          value={formData.participants}
          placeholder="eg: Anyone"
          onChange={handleChange}
          fullWidth
          required
          >
       
       <MenuItem value="anyone" selected>Anyone</MenuItem>
       <MenuItem value="school student">School Student </MenuItem>
       <MenuItem value="collefe student">College Student </MenuItem>
          </Select>
          </FormControl>
      <p >
        After reviewing your application we will publish, usually it takes 24 hours to review.
        Need any help setting up ? Email us 
      </p>
      </form>

    </div>
  );
};

export default StepFour;