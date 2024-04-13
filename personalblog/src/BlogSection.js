import React, { useState } from "react";
import "./BlogSection.css"; // CSS file for styling

const BlogSection = ({ blogs }) => {
  const [selectedBlogId, setSelectedBlogId] = useState(null);

  // Function to handle image click and toggle description
  const toggleDescription = (blogId) => {
    setSelectedBlogId((prevId) => (prevId === blogId ? null : blogId));
  };

  return (
    <div className="blog-page">
      <h2>Blog</h2>
      <div className="blog-section">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-item">
            <img
              src={blog.image}
              alt={blog.title}
              onClick={() => toggleDescription(blog.id)} // Handle image click
              className={selectedBlogId === blog.id ? "selected" : ""}
            />
            <div className="blog-details">
              <h3>{blog.title}</h3>
              {/* Show description only if selectedBlogId matches current blog id */}
              {selectedBlogId === blog.id && <p>{blog.description}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
