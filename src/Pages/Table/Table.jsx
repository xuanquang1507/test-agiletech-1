// Table.js
import "./Table.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "../../image/Logo.png";
import del from "../../image/icons8-delete-30 4.png";
import edit from "../../image/icons8-edit-24 4.png";
import { useNavigate } from "react-router-dom";
import Modal from "../../component/Modal";
import EditModal from "../../component/EditModal";

const Table = () => {
  const navigate = useNavigate();
  const [isModal, setIsModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [posts, setPosts] = useState([]);

  const updatePosts = (newPost) => {
    setPosts((prevPosts) => [newPost, ...prevPosts]);
  };
  const handleAdd = () => {
    setIsModal(true);
  };
  const handleEdit = () => {
    setEditModal(true);
  };

  useEffect(() => {
    axios
      .get("https://test-react.agiletech.vn/posts", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsImlhdCI6MTcwMDc5NTEwNSwiZXhwIjoxNzAwODgxNTA1fQ.NlGLbBQ9e5m1HUdik_RttGYNwpI8g9rXFcw-1CKFsIs",
        },
      })
      .then((response) => {
        console.log("response.data", response.data);
        setPosts(response.data.posts);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  const handlePost = () => {
    navigate("/home");
  };
  const handleLogout = () => {
    navigate("/");
  };

  const handleDelete = (postId) => {
    axios
      .delete(`https://test-react.agiletech.vn/posts/${postId}`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJhZG1pbiIsImlhdCI6MTcwMDc5NTEwNSwiZXhwIjoxNzAwODgxNTA1fQ.NlGLbBQ9e5m1HUdik_RttGYNwpI8g9rXFcw-1CKFsIs",
        },
      })
      .then((response) => {
        console.log("Post deleted successfully");
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== postId));
      })
      .catch((error) => {
        console.error("Error deleting post:", error);
      });
  };

  console.log("posts", posts);
  return (
    <div className="table">
      <div className="table-menu">
        <img src={logo} alt="logo" />
        <p onClick={handlePost}>Posts</p>
        <p onClick={handleLogout}>Logout</p>
      </div>
      <div className="table-post">
        <div className="table-post__header">
          <button onClick={handleAdd}>Add new</button>
          <div className="table-post__input">
            <input placeholder="Title" />
            <input placeholder="Tags  " />
          </div>
        </div>
        <div className="table-post__api">
          <table className="table-api">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Tags</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {posts?.map((post, index) => (
                <tr key={post.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{post.title}</td>
                  <td>{post.description}</td>
                  <td>{post.tags}</td>
                  <td style={{ display: "flex", justifyContent: "center" }}>
                    <img src={edit} alt="edit" onClick={handleEdit}/>
                    <img src={del} alt="delete" onClick={() => handleDelete(post.id)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {isModal && <Modal closeModal={() => setIsModal(false)} updatePosts={updatePosts}/>}
      {editModal && <EditModal closeModal={() => setEditModal(false)} />}
    </div>
  );
};

export default Table;
