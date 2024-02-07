import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.png";
import navIcon3 from "../assets/img/nav-icon3.png";
const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const d= new Date();
    let day = days[d.getDay()];

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
          <h1 class="yashsisodiya1">{"YASH SISODIYA"}</h1>
            {/* <img src={logo} alt="Logo" /> */}
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/yash-sisodiya-0059b5220/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://github.com/yash-a06"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://leetcode.com/yashsisodiya2835/"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Developed by yashsisodiya@2024</p>
            <div>
            <div>Hope you have a great<span className='uppercase'> {day} !!!</span></div>
        </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
