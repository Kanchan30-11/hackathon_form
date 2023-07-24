import React, { useState } from "react";
import Modal from "react-modal";
import { Button} from "@mui/material";
//import { AiFillCheckCircle } from "react-icons/ai"; // You can use any icon library
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./Stepfour";

const steps = ["Step 1", "Step 2", "Step 3","Step 4"];

const MultiStepForm = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({
    // Your form fields here
    hackathonName: "",
    universityName: "",
    hackathonMode: "",
    hackathonTheme: "",
    hackathonOverview:"",
    registrationDate:"",
    hackathonDate:"",
    resultDate:"",
    participants:""
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
    hackathonOverview:"",
    registrationDate:"",
    hackathonDate:"",
    resultDate:"",
    participants:""
    });
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <StepOne formData={formData} setFormData={setFormData} />
        );
      case 1:
        return (
          <StepTwo formData={formData} setFormData={setFormData} />
        );
      case 2:
        return (
          <StepThree formData={formData} setFormData={setFormData}/>
        );
      case 3:
        return (
          <StepFour formData={formData} setFormData={setFormData} />
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
            
            margin:"10px"
          }
          
    
        }}
        ariaHideApp={false}
      >
        <h2>{steps[activeStep]}</h2>
        {getStepContent(activeStep)}
        <div style={{ marginTop: "16px" }}>
          {activeStep !== 0 && (
            <Button onClick={handleBack} variant="outlined" style={{margin:"5px" }}>Back</Button>
          )}
          {activeStep !== steps.length - 1 ? (
            <Button onClick={handleNext} variant="contained" style={{ margin:"5px"}}>Next</Button>
          ) : (
            <Button onClick={handleCloseModal} variant="contained" style={{margin:"5px" }}>Finish</Button>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default MultiStepForm;

