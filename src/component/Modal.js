import React, { useState } from "react";
import axios from "axios";

const Modal = ({ closeModal, updatePosts }) => {
  const [infoEdit, setInfoEdit] = useState({
    title: "",
    description: "",
    tags: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInfoEdit((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };


  const handleAddClick = () => {
    axios
      .post("https://test-react.agiletech.vn/posts", infoEdit, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization:
            "Bearer " + localStorage.getItem('accessToken'),
        }
      })
      .then((response) => {
        console.log(response.data);
        updatePosts(response.data);
        closeModal();
      })
      .catch((error) => {
        console.error("Error adding data:", error);
      });
  };

  return (
    <div className="modal-overlay">
      <div className="modal-post">
        <div className="modal-edit">
          <label>Title</label>
          <input
            name="title"
            value={infoEdit.title}
            onChange={handleInputChange}
          />
          <label>Description</label>
          <input
            name="description"
            value={infoEdit.description}
            onChange={handleInputChange}
          />
          <label>Tags</label>
          <input
            name="tags"
            value={infoEdit.tags}
            onChange={handleInputChange}
          />
          <div className="modal-buttons">
            <button onClick={handleAddClick}>Add</button>
            <button onClick={closeModal} style={{ background: "red" }}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
