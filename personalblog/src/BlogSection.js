import React, { useState, useEffect } from "react";
import "./BlogSection.css";

const BlogSection = ({ blogs, deleteBlog }) => {
  const [selectedBlogId, setSelectedBlogId] = useState(null);
  const [selectedBlogDetails, setSelectedBlogDetails] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedDescription, setEditedDescription] = useState("");
  const [editedImage, setEditedImage] = useState("");
  const [updatedBlogs, setUpdatedBlogs] = useState(blogs); // State to hold updated blogs

  useEffect(() => {
    setUpdatedBlogs(blogs); // Update updatedBlogs state when blogs prop changes
  }, [blogs]);

  const toggleDescription = (blogId, blogDetails) => {
    setSelectedBlogId((prevId) => (prevId === blogId ? null : blogId));
    setSelectedBlogDetails((prevDetails) =>
      prevDetails && prevDetails.id === blogId ? null : blogDetails
    );
    setEditMode(false);
    setEditedTitle("");
    setEditedDescription("");
    setEditedImage("");
  };

  const toggleEditMode = () => {
    setEditMode((prevMode) => !prevMode);
    if (!editMode) {
      setEditedTitle(selectedBlogDetails.title);
      setEditedDescription(selectedBlogDetails.description);
      setEditedImage(selectedBlogDetails.image);
    }
  };

  const saveChanges = () => {
    const updatedBlogsCopy = updatedBlogs.map((blog) => {
      if (blog.id === selectedBlogId) {
        return {
          ...blog,
          title: editedTitle,
          description: editedDescription,
          image: editedImage,
        };
      }
      return blog;
    });
    setUpdatedBlogs(updatedBlogsCopy); // Update state with the new changes
    console.log("Updated Blogs:", updatedBlogsCopy); // Log the updated blogs array to the console
  };

  const handleDeleteBlog = (blogId) => {
    const filteredBlogs = updatedBlogs.filter((blog) => blog.id !== blogId);
    setUpdatedBlogs(filteredBlogs); // Update state with the filtered array
    console.log("Updated Blogs after deletion:", filteredBlogs); // Log the updated blogs array to the console
    deleteBlog(blogId); // Call the deleteBlog function from props
  };

  return (
    <div className="blog-page">
      <h2>Blog</h2>
      <div className="blog-section">
        {updatedBlogs.map((blog) => (
          <div key={blog.id} className="blog-item">
            <img
              src={blog.image}
              alt={blog.title}
              onClick={() => toggleDescription(blog.id, blog)}
              className={selectedBlogId === blog.id ? "selected" : ""}
            />
            <div className="blog-details">
              <h3>{blog.title}</h3>
              {selectedBlogId === blog.id && (
                <>
                  {editMode ? (
                    <>
                      <input
                        type="text"
                        value={editedTitle}
                        onChange={(e) => setEditedTitle(e.target.value)}
                      />
                      <textarea
                        value={editedDescription}
                        onChange={(e) => setEditedDescription(e.target.value)}
                      ></textarea>
                      <input
                        type="text"
                        value={editedImage}
                        onChange={(e) => setEditedImage(e.target.value)}
                      />
                      <button onClick={saveChanges}>Save</button>
                    </>
                  ) : (
                    <>
                      <p>{blog.description}</p>
                      {selectedBlogDetails &&
                        selectedBlogDetails.id === blog.id && <div></div>}
                    </>
                  )}
                  <button onClick={toggleEditMode}>
                    {editMode ? "Cancel" : "Edit"}
                  </button>
                </>
              )}
              <button onClick={() => handleDeleteBlog(blog.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
