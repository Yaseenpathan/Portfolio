import React from "react";

const About = () => {
  const handleDownload = () => {
    // Specify the file path here
    const fileUrl = "/resume.pdf"; // Update with your file path
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Yaseen_resume.pdf"; // Specify the file name for download
    link.click();
  };

  return (
    <div className="container">
      <h2>About Me</h2>
      <p className="">
        I am Pathan Yaseen Khan, an M.Tech student in Computer Science
        Engineering at KL University. With expertise in C, Python, Java,
        databases, and web development, I focus on practical learning and
        real-world applications. I'm passionate about problem-solving,
        technology exploration, and actively engage in college events to enhance
        my leadership skills. In my free time, I enjoy music and spending time
        with family while continuously seeking personal and professional growth.
      </p>
      <button
        className="btn btn-warning" // You can use any Bootstrap button class or custom styles
        onClick={handleDownload}
      >
        Download Resume
      </button>
    </div>
  );
};

export default About;
