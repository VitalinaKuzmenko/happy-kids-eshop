import React from "react";

const Contact = () => {
  return (
    <div className="mb-12">
      <h1 className="text-4xl mt-7" style={{ fontFamily: "var(--p-font)" }}>
        Contact Us
      </h1>
      <div className="flex flex-col justify-center my-5 md:flex-row">
        <div className="mx-10 mt-8 md:w-1/6">
          <h4 className="text-2xl text-gray-700 mb-2">VISIT US</h4>
          <p>500 Terry Francine St. San Francisco, CA 94158 123-456-7890</p>
        </div>
        <div className="mx-10 mt-8 md:w-1/6">
          <h4 className="text-2xl text-gray-700 mb-2">OPENING HOURS</h4>
          <p>Mon - Fri: 7am - 10pm</p>
          <p>Saturday: 8am - 10pm</p>
          <p>​Sunday: 8am - 11pm</p>
        </div>
        <div className="mx-10 mt-8 md:w-1/6">
          <h4 className="text-2xl text-gray-700 mb-2">CUSTOMER SERVICE</h4>
          <p>1-800-000-000</p>
          <p>123-456-7890</p>
          <p>info@happykids.com</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
