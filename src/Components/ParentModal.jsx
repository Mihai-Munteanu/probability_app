import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import ChildModal from "./ChildModal";

const style = {
     position: "absolute",
     top: "50%",
     left: "50%",
     transform: "translate(-50%, -50%)",
     // width: 400,
     height: 200,
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

export default function ParentModal({ showMessage }) {
     const [open, setOpen] = React.useState(false);
     const handleOpen = () => {
          setOpen(true);
     };
     const handleClose = () => {
          setOpen(false);
     };

     const [data, setData] = useState("");

     const childToParent = () => {
          setOpen(false);
          return showMessage();
     };

     function handleCloseParentModal() {
          setOpen(false);

          return alert(
               "I know what you did. You broke my heart. You broke my heart!"
          );
     }

     return (
          <div>
               <StartButton onClick={handleOpen}>Start</StartButton>
               <Modal
                    open={open}
                    onClose={handleClose}
                    onKeyDown={(event) => {
                         if (event.key === "Escape") {
                              handleCloseParentModal();
                         }
                    }}
                    aria-labelledby="parent-modal-title"
                    aria-describedby="parent-modal-description"
               >
                    <Box sx={{ ...style }}>
                         <div className="modalContainer">
                              <div>
                                   <h2 id="parent-modal-title">
                                        Are you Sure?
                                   </h2>
                                   <p id="parent-modal-description">
                                        Once you say YES you cannot go back
                                   </p>
                              </div>
                              <div className="arrangeButtons">
                                   <StartButton
                                        onClick={handleCloseParentModal}
                                   >
                                        No
                                   </StartButton>
                                   <ChildModal childToParent={childToParent} />
                              </div>
                         </div>
                    </Box>
               </Modal>
          </div>
     );
}
