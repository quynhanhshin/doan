import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'reactstrap'
import "./footer.css"
import dotcom from "../../imgs/dot-footer.svg"

export default function Footer() {
  return (
    <div>
    <div className="footer">
      <Row>
        <Col sm={6} md={4} lg={3} >
          <div className='title'>
            <p>COMPANY</p>
          </div>
          <div className='content'>
            <ul>
              <li>
              <img alt="dot" src={dotcom}/>
                <Link to="/">About PlayGrow</Link>
              </li>
              <li>
              <img alt="dot" src={dotcom}/>
                <Link to="/">Our Experts</Link>
              </li>
              <li>
              <img alt="dot" src={dotcom}/>
                <Link to="/">Services & Prices</Link>
              </li>
              <li>
              <img alt="dot" src={dotcom}/>
                <Link to="/">Latest News</Link>
              </li>
              <li>
              <img alt="dot" src={dotcom}/>
                <Link to="/">FAQ</Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col sm={6} md={4} lg={3} >
          <div className='title'>
            <p>CUSTOMERS</p>
          </div>
          <div className='content'>
            <ul>
              <li>
              <img alt="dot" src={dotcom}/>
                <Link to="/">Read Our Advice</Link>
              </li>
              <li>
              <img alt="dot" src={dotcom}/>
                <Link to="/">Get In Touch</Link>
              </li>
              <li>
              <img alt="dot" src={dotcom}/>
                <Link to="/">Online Store</Link>
              </li>
              <li>
              <img alt="dot" src={dotcom}/>
                <Link to="/">Terms & Conditions</Link>
              </li>
              <li>
              <img alt="dot" src={dotcom}/>
                <Link to="/">Ask Away</Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col sm={6} md={4} lg={3} >
          <div className='title'>
            <p>SOCIAL MEDIA</p>
          </div>
          <div className='content'>
            <ul className="social">
              <li>
              <i class="fa-brands fa-twitter"></i>
                <Link to="/">Twitter</Link>
              </li>
              <li>
              <i class="fa-brands fa-instagram"></i>
                <Link to="/">Instagram</Link>
              </li>
              <li>
              <i class="fa-brands fa-facebook-f"></i>
                <Link to="/">Facebook</Link>
              </li>
              <li>
              <i class="fa-brands fa-pinterest-p"></i>
                <Link to="/">Pinterest</Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col sm={6} md={4} lg={3} >
          <div className='title'>
            <p>CONTACT</p>
          </div>
          <div className="content">
            <p className="day">Monday to Friday 9 a.m. - 5 p.m.</p>
            <div className='content'>
            <ul className="contact">
              <li>
              <i class="fa-solid fa-phone"></i>
                <Link to="/">012 34 567 8912</Link>
              </li>
              <li>
              <i class="fa-solid fa-phone"></i>
                <Link to="/">123 45 678 9123</Link>
              </li>
              <li>
              <i class="fa-solid fa-envelope"></i>
                <Link to="/">playgrow@qodeinteractive.com</Link>
              </li>
            </ul>
            </div>
          </div>
        </Col>
      </Row>
    </div>
    <div className='copy-right'>
      <p>© 2024 PlayGrow US, Inc. All Rights Reserved</p>
    </div>
    </div>

  );
}
