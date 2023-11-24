import React from "react";

const EditModal = ({ closeModal }) => {
    
  return (
    <div className="modal-overlay">
      <div className="modal-post">
        <div className="modal-edit">
          <label>Title</label>
          <input name="title" />
          <label>Description</label>
          <input name="description" />
          <label>Tags</label>
          <input name="tags" />
          <div className="modal-buttons">
            <button onClick={closeModal}>Edit</button>
            <button onClick={closeModal} style={{ background: "red" }}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
