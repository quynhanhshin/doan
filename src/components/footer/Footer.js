import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Row } from 'reactstrap'
import "./footer.css"

export default function Footer() {
  return (
    <div className="footer">
      <Row>
        <Col sm={6} md={4} lg={3} >
          <div className='title'>
            <p>COMPANY</p>
          </div>
          <div className='content'>
            <ul>
              <li>
                <Link to="/">About PlayGrow</Link>
              </li>
              <li>
                <Link to="/">Our Experts</Link>
              </li>
              <li>
                <Link to="/">Services & Prices</Link>
              </li>
              <li>
                <Link to="/">Latest News</Link>
              </li>
              <li>
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
                <Link to="/">Read Our Advice</Link>
              </li>
              <li>
                <Link to="/">Get In Touch</Link>
              </li>
              <li>
                <Link to="/">Online Store</Link>
              </li>
              <li>
                <Link to="/">Terms & Conditions</Link>
              </li>
              <li>
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
                <Link to="/">Twitter</Link>
              </li>
              <li>
                <Link to="/">Instagram</Link>
              </li>
              <li>
                <Link to="/">Facebook</Link>
              </li>
              <li>
                <Link to="/">Pinterest</Link>
              </li>
            </ul>
          </div>
        </Col>
        <Col sm={6} md={4} lg={3} >
          <div className='title'>
            <p>CONTACT</p>
          </div>
          <div className='content'>
            <p>Monday to Friday 9 a.m. - 5 p.m.</p>
            <p>012 34 567 8912</p>
            <p>123 45 678 9123</p>
            <p>playgrow@qodeinteractive.com</p>
          </div>
        </Col>
      </Row>
    </div>
    
  )
}
