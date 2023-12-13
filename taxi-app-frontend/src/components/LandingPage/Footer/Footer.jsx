import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <div className="footer-container primary-bg center flex column">
      <div className="flex column top">
        <p>
          <a className="footer-link" href="/">
            SpeedTrip
          </a>
        </p>
        <p>
          <a className="footer-link" href="/">
            Visit help center
          </a>
        </p>
      </div>
      <div className="footer-wrapper flex">
        <div className="flex">
          <ul>
            <li>
              <a className="footer-link" href="/">
                Company
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                About us
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                Our Offerings
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                NewsRoom
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                Blogs
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div className="flex">
          <ul>
            <li>
              <a className="footer-link" href="/">
                Products
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                Ride
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                Drive
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                Eat
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                Business
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                Freight
              </a>
            </li>
          </ul>
        </div>
        <div className="flex">
          <ul>
            <li>
              <a className="footer-link" href="/">
                Global Citizenship
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                Safety
              </a>
            </li>
            <li>
              <a className="footer-link" href="/">
                Diversity and inclusion
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
