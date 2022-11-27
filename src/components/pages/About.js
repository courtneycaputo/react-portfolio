import React from 'react';
import myPicture from '../../assets/mypicture.png';
import { Row, Col } from 'react-bootstrap';


export default function About() {
  return (
    <div className="container aboutMeText text-color">
      <br></br>  
      <br></br>  
      
     
      <Row>
        <Col lg="3">
          <img src={myPicture} className="my-picture" alt="Courtney" />
        </Col>
      
        <Col lg="7">
          <p>
          <br></br>
          <h1>Hi, I'm Courtney Courtney</h1>
            Hello, and welcome to my portfolio! I recently graduated from the Full Stack Coding Bootcamp offered through UC San Diego Extensions. I have a bachelor's degree from UC Santa Barbara in Economics with an emphasis in Accounting. After spending 11 years working in Accounting and Finance, I have decided to change career paths and become a developer. Through the bootcamp, I have been able to learn both front-end and back-end development.
          </p>
        </Col>
            
      </Row>
      <br></br>
      <br></br>

    </div>
  );
}
