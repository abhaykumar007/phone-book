import React, { useState } from "react";
import Contact from "./contact";

function ContactList(props) {
  // const [user, setUser] = useState([]);
  const [input, setInput] = useState("");
  let user = props.user;
  const update = props.handleUpdate;

  // useEffect(() => {
  // setUser(user)
  // }, [])

  //  function handelSearch(){
  //   let filterArray = user.filter((element) => element !== )
  //  }

  if (input) {
    user = user.filter((element) =>
      element.FirstName.toLowerCase().includes(input.toLowerCase())
    );
  }
  return (
    <div className="contactList">
      <div className="contactList-header">
        <h2>Contact List</h2>
        <div>
          <input
            placeholder="Search......"
            onChange={(e) => setInput(e.target.value)}
          />
          <button>Search</button>
        </div>
      </div>

      {user.map((element, i) => (
        <Contact key={i} contact={element} handleUpdate={update} />
      ))}
    </div>
  );
}

export default ContactList;
