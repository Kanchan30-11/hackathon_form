import React from "react";
import { TextField } from "@mui/material";
import './multistep.css'

const StepThree = ({ formData, setFormData }) => {
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };
  
    return (
      <form>
         <label >Registration Starting & Ending Date*</label>
        <TextField style={{  marginBottom:"16px" }}
         // label="Registration Starting & Ending Date*"
          name="registrationDate"
          value={formData.registrationDate}
          type="date"
          onChange={handleChange}
          fullWidth
          required
        />
        <label >Hackathon Starting & Ending Date*</label>
        <TextField style={{marginBottom:"16px"  }}
        //  label="Hackathon Starting & Ending Date*"
          name="hackthonDate"
          value={formData.hackathonDate}
          type="date"
          onChange={handleChange}
          fullWidth
          required
        />
    
        <label >Result Date*</label>

        <TextField style={{  marginBottom:"16px" }}
         // label="Result Announcement *"
          name="resultDate"
          value={formData.resultDate}
          type="date"
          onChange={handleChange}
          fullWidth
          required
        />
      </form>
    );
  };
  
export default StepThree;
