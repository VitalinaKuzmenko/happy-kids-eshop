import React from "react";

const About = () => {
  return (
    <div className="mb-12">
      <img src="/About_image.webp" alt="kids room" />
      <h1 className="text-4xl mt-7" style={{ fontFamily: "var(--p-font)" }}>
        Our Story
      </h1>
      <div className="mt-5 max-w-2xl block mx-auto text-cyan-800 text-lg">
        <p className="mb-5">
          Welcome to our online shop, "Happy Kids" where we offer a wide
          selection of fashionable and comfortable kids clothes for babies,
          toddlers, and young children. We are committed to providing our
          customers with high-quality clothes made with the latest fashion
          trends and durable materials that are safe and comfortable for your
          little ones.
        </p>
        <p>
          At Happy Kids, we understand the importance of excellent customer
          service, which is why we have a dedicated team of professionals
          available to assist you with any questions or concerns you may have.
          We also offer free returns and exchanges to ensure that you are
          completely satisfied with your purchase.
        </p>
      </div>
    </div>
  );
};

export default About;
