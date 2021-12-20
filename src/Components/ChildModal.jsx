import React from "react";
import { Alert, Box, Button, Modal } from "@mui/material";
import { styled } from "@mui/material/styles";

const style = {
     position: "absolute",
     top: "50%",
     left: "50%",
     transform: "translate(-50%, -50%)",
     width: 400,
     height: 300,
     bgcolor: "background.paper",
     border: "2px solid #000",
     boxShadow: 24,
     borderRadius: 8,
     boxShadow: 3,
     pt: 2,
     px: 4,
     pb: 3,
};

const StartButton = styled(Button)({
     boxShadow: "none",
     textTransform: "none",
     color: "#000000",
     fontSize: 32,
     padding: "6px 12px",
     border: "1px solid",
     lineHeight: 1.5,
     backgroundColor: "#FFFFFF",
     borderColor: "#374151",
     fontFamily: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
     ].join(","),
     "&:hover": {
          backgroundColor: "#78909C",
          boxShadow: "none",
          color: "#FFFFFF",
     },
     "&:active": {
          boxShadow: "none",
          backgroundColor: "#0062cc",
          borderColor: "#005cbf",
     },
     "&:focus": {
          boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
     },
});

export default function ChildModal({ childToParent }) {
     const [open, setOpen] = React.useState(false);
     const handleOpen = () => {
          setOpen(true);
     };
     const handleClose = () => {
          setOpen(false);
     };

     function closeModalEvent() {
          setOpen(false);
          return childToParent();
     }

     function errorMessage() {
          return alert("You cannot say no");
     }

     return (
          <React.Fragment>
               <div className="childButton">
                    <StartButton onClick={handleOpen}>Yes</StartButton>
               </div>
               <Modal
                    hideBackdrop
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="child-modal-title"
                    aria-describedby="child-modal-description"
               >
                    <Box sx={{ ...style, width: 200 }}>
                         <div className="modalContainer">
                              <div>
                                   <h2 id="child-modal-title">Sure you are?</h2>
                                   <p id="child-modal-description">
                                        Last chance...
                                   </p>
                              </div>
                              <div className="arrangeButtons">
                                   <StartButton onClick={errorMessage}>
                                        No
                                   </StartButton>
                                   <StartButton onClick={closeModalEvent}>
                                        Yes
                                   </StartButton>
                              </div>
                         </div>
                    </Box>
               </Modal>
          </React.Fragment>
     );
}
