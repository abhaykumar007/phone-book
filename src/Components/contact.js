import React from "react";

function Contact(props) {
  const contact = props.contact;
  //   console.log("contact", props.handleUpdate);
  return (
    <div className="contact">
      <h3>
        {contact.FirstName} {contact.LastName}
      </h3>
      <div className="contact-details">
        <div className="contact-details-ele">
          <li>{contact.ContactNo}</li>
          <li>{contact.DOB}</li>
          <li>{contact.EmailID}</li>
        </div>
        <div className="contact-details-ele">
          <li>{contact.Occupation}</li>
          <li>{contact.Designation}</li>
        </div>
      </div>

      <div className="contact-btn">
        <div className="fav-btn">
          <button
            onClick={() => {
              props.handleUpdate(contact, "fav");
            }}
          >
            Favourites
          </button>
        </div>
        <div className="dial-btn">
          <button
            onClick={() => {
              props.handleUpdate(contact, "recent");
            }}
          >
            Dial
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
