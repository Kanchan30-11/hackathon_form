import React, { useState } from "react";
import Modal from "react-modal";
import { Button, TextField, MenuItem, Select, FormControl } from "@mui/material";
import './multistep.css'

const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];

const MultiStepForm = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    // Your form fields here
    hackathonName: "",
    universityName: "",
    hackathonMode: "",
    hackathonTheme: "",
    hackathonOverview: "",
    registrationDate: "",
    hackathonDate: "",
    resultDate: "",
    participants: ""
  });

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    setActiveStep(0);
    setFormData({
      // Reset form data
      hackathonName: "",
      universityName: "",
      hackathonMode: "",
      hackathonTheme: "",
      hackathonOverview: "",
      registrationDate: "",
      hackathonDate: "",
      resultDate: "",
      participants: ""
    });
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };


  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <form>
            <label>Hackathon Name* (You can change later)</label>
            <TextField style={{ marginBottom: "16px" }} size="small"
              name="hackathonName"
              value={formData.hackathonName}
              placeholder="eg: Design & Development "
              onChange={handleInputChange}
              fullWidth
              required
            />
            <label>University/College Name* (You are representing)</label>
            <TextField style={{ marginBottom: "16px" }} size="small"
              name="universityName"
              value={formData.universityName}
              placeholder="eg: Bundelkhand University"
              onChange={handleInputChange}
              fullWidth
              required
            />
            <label>Hackathon Mode</label>
            <FormControl fullWidth>

              <Select style={{ marginBottom: "16px" }}
                size="small"
                name="hackathonMode"
                value={formData.hackathonMode}
                placeholder="Online"
                onChange={handleInputChange}
                fullWidth
                required
              >

                <MenuItem value="online">Online</MenuItem>
                <MenuItem value="remote">Remote</MenuItem>
              </Select>
            </FormControl>
          </form>
        );
      case 1:
        return (
          <form>
            <label>Hackathon Theme</label>
            <TextField style={{ marginBottom: "16px" }}
              size="small"
              name="hackathonTheme"
              value={formData.hackathonTheme}
              placeholder="eg: Design & ML"
              onChange={handleInputChange}
              fullWidth
              required
            />
            <label>"Hackathon Overview</label>
            <TextField style={{ margin: "6px" }}
              size="small"
              name="hackathonOverview"
              value={formData.hackathonOverview}
              multiline // This enables the textarea functionality
              rows={5} // You can adjust the number of rows displayed in the textarea
              onChange={handleInputChange}
              fullWidth
              required
            />
          </form>
        );
      case 2:
        return (
          <form>
            <label >Registration Starting & Ending Date*</label>
            <TextField style={{ marginBottom: "16px" }}
              size="small"
              name="registrationDate"
              value={formData.registrationDate}
              type="date"
              onChange={handleInputChange}
              fullWidth
              required
            />
            <label >Hackathon Starting & Ending Date*</label>
            <TextField style={{ marginBottom: "16px" }}
              size="small"
              name="hackthonDate"
              value={formData.hackathonDate}
              type="date"
              onChange={handleInputChange}
              fullWidth
              required
            />

            <label >Result Date*</label>

            <TextField style={{ marginBottom: "16px" }}
              size="small"
              name="resultDate"
              value={formData.resultDate}
              type="date"
              onChange={handleInputChange}
              fullWidth
              required
            />
          </form>
        );
      case 3:
        return (
          <div>
            <form>
              <label>Who can participate?</label>
              <FormControl fullWidth>
                <Select style={{ marginTop: "16px" }}
                  size="small"
                  name="participants"
                  value={formData.participants}
                  placeholder="eg: Anyone"
                  onChange={handleInputChange}
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

      default:
        return "Unknown stepIndex";
    }
  };

  return (
    <div>
      <Button variant="contained" onClick={handleOpenModal}>
        Register
      </Button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={handleCloseModal}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "450px",
            height: "500px",
            overflow: "auto",

            margin: "10px"
          }


        }}
        ariaHideApp={false}
      >
        <h2>{steps[activeStep]}</h2>
        {getStepContent(activeStep)}
        <div style={{ marginTop: "16px" }}>
          {activeStep !== 0 && (
            <Button onClick={handleBack} variant="outlined" style={{ margin: "5px" }}>Back</Button>
          )}
          {activeStep !== steps.length - 1 ? (
            <Button onClick={handleNext} variant="contained" style={{ margin: "5px" }}>Next</Button>
          ) : (
            <Button onClick={handleCloseModal} variant="contained" style={{ margin: "5px" }}>Finish</Button>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default MultiStepForm;