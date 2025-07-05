import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Weather App.
        </p>
        <div className="mt-2">
          <a
            href="https://github.com/Siraddeen"
            className="text-blue-400 hover:underline mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            href="https://www.linkedin.com/in/siraddeen/"
            className="text-blue-400 hover:underline mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
          <a
            href="https://siraddeen-portfolio.netlify.app/"
            className="text-blue-400 hover:underline mx-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio website
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
