import React from "react";
import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="footer">
      <div onClick={scrollToTop} className="footer__backToTop">
        <h4>Back to top</h4>
      </div>
      <div className="footer__container">
        {/**get to know */}
        <div className="footer__section">
          <div className="footer__title">
            <h4>Get to Know Us</h4>
          </div>
          <div className="footer__info">
            <ul>
              <li>About Amazon</li>
              <li>Careers</li>
              <li>Press Releases</li>
              <li>Amazon Science</li>
            </ul>
          </div>
        </div>
        {/**connect with US */}
        <div className="footer__section">
          <div className="footer__title">
            <h4>Connect with Us</h4>
          </div>
          <div className="footer__info">
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        {/**make money with us */}
        <div className="footer__section">
          <div className="footer__title">
            <h4>Make Money with Us</h4>
          </div>
          <div className="footer__info">
            <ul>
              <li>Sell on Amazon</li>
              <li>Sell under Amazon Accelerator</li>
              <li>Protect and Build Your Brand</li>
              <li>Amazon Global Selling</li>
              <li>Supply to Amazon</li>
              <li>Become an Affiliate</li>
              <li>Fulfilment by Amazon</li>
              <li>Advertise Your Products</li>
              <li>Amazon Pay on Merchants</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
