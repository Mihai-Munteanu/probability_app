import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

const style = {
     position: "absolute",
     top: "50%",
     left: "50%",
     transform: "translate(-50%, -50%)",
     width: 400,
     bgcolor: "background.paper",
     border: "2px solid #000",
     boxShadow: 24,
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

function ChildModal() {
     const [open, setOpen] = React.useState(false);
     const handleOpen = () => {
          setOpen(true);
     };
     const handleClose = () => {
          setOpen(false);
     };

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
                         <h2 id="child-modal-title">Sure you are?</h2>
                         <p id="child-modal-description">Last chance...</p>
                         <div className="childButton">
                              <StartButton onClick="#">Yes 2</StartButton>
                         </div>
                    </Box>
               </Modal>
          </React.Fragment>
     );
}

export default function NestedModal() {
     const [open, setOpen] = React.useState(false);
     const handleOpen = () => {
          setOpen(true);
     };
     const handleClose = () => {
          setOpen(false);
     };

     return (
          <div>
               <StartButton onClick={handleOpen}>Start</StartButton>
               <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
               >
                    <Box sx={{ ...style, width: 400 }}>
                         <h2 id="parent-modal-title">Are you Sure?</h2>
                         <p id="parent-modal-description">
                              Once you say YES you cannot go back
                         </p>
                         <ChildModal />
                    </Box>
               </Modal>
          </div>
     );
}
