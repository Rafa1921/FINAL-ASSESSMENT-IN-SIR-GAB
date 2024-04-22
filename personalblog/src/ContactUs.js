import React from "react";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <table className="contact-table">
        <tbody>
          <tr>
            <td className="label">Address:</td>
            <td>123 Main Street, Cityville, Country</td>
          </tr>
          <tr>
            <td className="label">Phone:</td>
            <td>(123) 456-7890</td>
          </tr>
          <tr>
            <td className="label">Email:</td>
            <td>info@example.com</td>
          </tr>
          <tr>
            <td className="label">LinkedIn:</td>
            <td></td>
          </tr>
          {/* Add more rows for additional contact methods if needed */}
        </tbody>
      </table>
    </div>
  );
};

export default ContactUs;
