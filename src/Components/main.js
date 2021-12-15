import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ContactList from "./contactList";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  height: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Main() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [dOB, setDOB] = useState("");
  const [emailID, setEmailID] = useState("");
  const [occupation, setOccupation] = useState("");
  const [desig, setDesig] = useState("");
  const [userList, setUserList] = useState([]);

  const [showFav, setShowFav] = useState(false);
  const [showAllContacts, setShowAllContacts] = useState(true);
  const [showRecent, setShowRecent] = useState(false);

  const [favList, setFavList] = useState([]);
  const [recentList, setRecentList] = useState([]);

  const handleFavBtn = () => {
    setShowFav(true);
    setShowRecent(false);
    setShowAllContacts(false);
  };

  const handleAllContacts = () => {
    setShowAllContacts(true);
    setShowFav(false);
    setShowRecent(false);
  };

  const handleRecent = () => {
    setShowRecent(true);
    setShowFav(false);
    setShowAllContacts(false);
  };

  const contactList = showRecent ? recentList : showFav ? favList : userList;

  function handleUpdate(contact, operation) {
    if (operation === "fav") {
      setFavList([...favList, contact]);
    } else if (operation === "recent") {
      setRecentList([contact, ...recentList]);
    }
  }

  const handelSave = () => {
    setUserList((prevState) => [
      {
        FirstName: firstName,
        LastName: lastName,
        ContactNo: contactNo,
        DOB: dOB,
        EmailID: emailID,
        Occupation: occupation,
        Designation: desig,
      },
      ...prevState,
    ]);
    handleClose();
  };
  console.log(userList);
  return (
    <div className="main">
      <div className="main-side">
        <h2>Contacts</h2>
        <div className="main-btn">
          <Button onClick={handleAllContacts}>All Contacts</Button>
          <Button onClick={handleOpen}>Create Contact</Button>
          <Button onClick={handleFavBtn}>Favourites</Button>
          <Button onClick={handleRecent}>Recent</Button>
        </div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              className="modal-header"
            >
              Contact Info
            </Typography>
            <Typography
              id="modal-modal-description"
              sx={{ mt: 2 }}
              className="modal-details"
            >
              <div className="modal-input">
                <label>First Name</label>
                <input
                  placeholder="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="modal-input">
                <label>Last Name</label>
                <input
                  placeholder="Last Name"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="modal-input">
                <label>Contact No</label>
                <input
                  placeholder="Contact No"
                  onChange={(e) => setContactNo(e.target.value)}
                />
              </div>
              <div className="modal-input">
                <label>DOB</label>
                <input
                  placeholder="DOB"
                  onChange={(e) => setDOB(e.target.value)}
                />
              </div>
              <div className="modal-input">
                <label>Occupation</label>
                <input
                  placeholder="Occupation"
                  onChange={(e) => setOccupation(e.target.value)}
                />
              </div>
              <div className="modal-input">
                <label>Email id</label>
                <input
                  placeholder="Email id"
                  onChange={(e) => setEmailID(e.target.value)}
                />
              </div>
              <div className="modal-input">
                <label>Designation</label>
                <input
                  placeholder="Designation"
                  onChange={(e) => setDesig(e.target.value)}
                />
              </div>

              <div onClick={handelSave} className="modal-save-btn">
                <button>Save</button>
              </div>
            </Typography>
          </Box>
        </Modal>
      </div>
      <div className="main-contactList">
        {contactList.length > 0 ? (
          <ContactList user={contactList} handleUpdate={handleUpdate} />
        ) : (
          <h2>List is Empty</h2>
        )}
      </div>
    </div>
  );
}

export default Main;
