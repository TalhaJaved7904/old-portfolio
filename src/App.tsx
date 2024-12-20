import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-scroll';
import { Col, Container, Navbar, Row, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faLaptopCode, faBezierCurve } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import withbgcopy1 from './images/withbgcopy1.jpeg';


function App() {

  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const templateParams = {
      user_name: name,
      message: message,
    };

    emailjs
      .send('service_qgi86ys', 'template_3zo1v8a', templateParams, 'A4KpEsgicLSciftjA')
      .then(
        (response) => {
          alert('Message sent successfully!');
        },
        (error) => {

          alert('Error sending message, please try again.');
          console.log(error)
        }
      );
  }

  return (
    <>
      <Navbar bg="dark" expand="lg" data-bs-theme="dark" className="py-3">
        <Container>
          <Navbar.Brand href="#" className="fw-bold">
            Talha <span className="text-warning">Javed</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  to="home"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="service"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="resume"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  Experience
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="nav-link"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div id='home' className='bg-secondary'>
        <Container className=''>
          <Row>
            <Col sm style={{ textAlign: 'start', paddingTop: '50px', paddingBottom: "50px" }}>
              <p className='text-warning'>
                Hello , Welcome
              </p>
              <h1 className='text-white'>
                I'm Talha Javed
              </h1>
              <p className='pb-3 pt-3'>
                "Hi, I'm Talha, a passionate MERN stack developer who loves building intuitive and efficient web applications. I thrive on turning ideas into seamless digital experiences with clean code and modern designs. Let's create something amazing together!"
              </p>
              <button onClick={() => document.getElementById('contact')!.scrollIntoView({ behavior: 'smooth' })} className='btn btn-warning'>
                Contact Me
              </button>
            </Col>
            <Col sm>
              <img className='mt-5 mb-5 ms-1' src={withbgcopy1} alt="main image" width='300'
                style={{ borderRadius: '15px', border: '0.5px solid', }} />
            </Col>
          </Row>
        </Container>
      </div>
      <div id='about' className='bg-dark'>
        <Container>
          <Row style={{ textAlign: 'start', paddingTop: '30px', paddingBottom: '50px' }}>
            <Col sm>
              <img className='ms-1 mb-5' src={withbgcopy1} alt="main image" width='300'
                style={{
                  borderRadius: '15px',
                  border: '0.5px solid',
                  marginTop: '80px',
                  boxShadow: 'inherit',
                  borderLeft: '8px solid #ffc107',   // Left border
                  borderBottom: '8px solid #ffc107', // Bottom border
                  padding: '10px',                // Space inside the border
                  margin: '60px',
                }} />
            </Col>
            <Col sm style={{ marginTop: "50px" }}>
              <h1 className='text-white   '>
                ABOUT <span className='text-warning'>ME</span>
              </h1>
              <p className='text-white pt-3 pb-3'>
                Hi, I'm <b>Talha Javed</b>, a dedicated MERN stack developer passionate about creating dynamic, user-friendly web applications. I specialize in developing full-stack solutions using MongoDB, Express.js, React, and Node.js, ensuring seamless performance from front-end to back-end.

                I enjoy turning complex problems into simple, elegant solutions and thrive in collaborative environments where creativity meets technology. <br /> Whether it’s building scalable APIs, crafting responsive user interfaces, or optimizing database queries, I’m always eager to learn, grow, and deliver high-quality code.

                Let's bring ideas to life through clean code and innovative design!
              </p>
              <button onClick={() => document.getElementById('contact')!.scrollIntoView({ behavior: 'smooth' })} className='btn btn-warning'>
                Contact Me
              </button>
            </Col>
          </Row>
        </Container>
      </div>
      <div id='service' className='bg-secondary'>
        <Container style={{ textAlign: 'start', paddingTop: '70px', paddingBottom: '60px', }}>
          <Row>
            <Col sm>
              <h1 className='text-white'>
                MY <span className='text-warning'>SERVICE</span>
              </h1>
              <p className='pb-3'>
                Every great idea deserves a strong digital foundation. I bring expertise in full-stack development to create web applications that are not only functional but also engaging. From crafting beautiful user interfaces to building scalable server-side solutions, I ensure your vision becomes a reality. Let's build something extraordinary together!
              </p>
            </Col>
          </Row>
          <Row className=' bg-secondary'>
            <Col sm className='pt-3'>
              <div className='pt-3 pb-3 card bg-dark text-white text-center'>
                <div className='pt-3'>
                  <FontAwesomeIcon className='text-warning' icon={faLaptopCode} size='3x' />
                </div>
                <div>
                  <h2 className='pt-3 pb-3'>
                    Full-Stack  Web Development
                  </h2>
                </div>
                <div>
                  <p className=' ps-4 pe-4'>
                    End-to-end development of modern, scalable, and responsive web applications using MongoDB, Express, React, and Node.js.
                  </p>
                </div>
              </div>
            </Col>
            <Col sm className='pt-3'>
              <div className='pt-3 card bg-dark text-white text-center'>
                <div className='pt-3'>
                  <FontAwesomeIcon icon={faFloppyDisk} size='3x' className='text-warning' />
                </div>
                <div>
                  <h2 className='pt-3 pb-3'>
                    API Development & Integration
                  </h2>
                </div>
                <div>
                  <p className='pt-3 ps-4 pe-4 pb-4'>
                    Design and implement powerful RESTful APIs for seamless communication between front-end and back-end systems
                  </p>
                </div>
              </div>
            </Col>
            <Col sm className='pt-3'>
              <div className='pt-3 card bg-dark text-white text-center'>
                <div className='pt-3'>
                  <FontAwesomeIcon icon={faBezierCurve} size='3x' className='text-warning' />
                </div>
                <div>
                  <h2 className='pt-3 pb-3'>
                    UI/UX Design & Front-End Development
                  </h2>
                </div>
                <div>
                  <p className='pt-3 ps-4 pe-4 pb-4'>
                    Create intuitive and visually appealing user interfaces with a focus on user experience and performance optimization.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id='resume' className='bg-dark pt-5 pb-5'>
        <Container style={{ textAlign: 'start', paddingTop: '10px', }}>
          <Row>
            <Col sm>
              <h1 className='pt-3 text-white '>
                MY <span className='text-warning'>EXPERIENCE</span>
              </h1>
              <p className='pt-3 pb-3 pt-3 text-white'>
                I specialize in building dynamic, responsive web applications using the MERN stack. With hands-on experience in React, Node.js, and MongoDB, I focus on delivering seamless, user-friendly solutions.
              </p>
            </Col>
          </Row>
          <Row className=' pt-3 bg-dark'>
            <Col sm className='pt-3' >
              <div className=' pt-3 card bg-secondary pb-2 '>
                <div className='text-center'>
                  <h2 className=' pt-3 pb-3'>
                    Front-End Development
                  </h2>
                </div>
                <div>
                  <p className='pt-3 ps-4 pe-4'>
                    Specializing in building responsive, user-friendly interfaces using React, Redux, and modern web technologies.
                  </p>
                </div>
                <div>
                  <ul>
                    <li>React, Redux</li>
                    <li>Material-UI, Bootstrap</li>
                    <li>HTML5, CSS3</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col sm className='pt-3' >
              <div className='card bg-secondary '>
                <div >
                  <h2 className='pt-3 pb-3 text-center'>
                    Back-End Development
                  </h2>
                </div>
                <div>
                  <p className='pt-2 ps-4 pe-4 pb-2'>
                    Skilled in developing APIs, managing databases, and ensuring server-side logic is scalable and efficient using Node.js and MongoDB.
                  </p>
                </div>
                <div>
                  <ul>
                    <li>Node.js, Express</li>
                    <li>MongoDB, RESTful APIs</li>
                    <li>JWT Authentication</li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col sm className='pt-3' >
              <div className='card bg-secondary '>
                <div className=' pb-3 text-center '>
                  <h2 className=' pt-2 pb-2'>
                    Full-Stack Project Management
                  </h2>
                </div>
                <div>
                  <p className='ps-3 pe-3'>
                    Experience delivering full-stack solutions, overseeing end-to-end project development, from concept to deployment.
                  </p>
                </div>
                <div>
                  <ul>
                    <li>MERN Stack</li>
                    <li>Project Management & Git</li>
                    <li>Agile & Deployment (Heroku, AWS)</li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div id='contact' className='bg-secondary '>
        <Container style={{ textAlign: 'start', paddingTop: '100px', }}>
          <h1 className='text-center'>
            CONTACT <span className='text-warning'>ME</span>
          </h1>
          <p className='pt-4 text-center'>
            I would love to hear from you! Whether you have a question, want to collaborate, or just want to connect, feel free to reach out. I'm always open to new opportunities and challenges in the world of web development. Let's create something amazing together!

            You can contact me via email or connect with me on LinkedIn. Looking forward to hearing from you!
          </p>
          <Row>
            <Col className='my-5 pb-4 '>
              <ul className='text-warning' >
                <li className=' my-3'>
                  Adress _ <span className='text-dark'>Karachi Pakistan</span>
                </li>
                <li className='my-3'>
                  Phone _  <span className='text-dark'>+923308721490</span>
                </li>
                <li className='my-3'>
                  Email _  <span className='text-dark'>infodevtalha@gmail.com</span>
                </li>
              </ul>
            </Col>
            <Col sm>
              <Container className="my-5 pb-4 bg-dark text-white ">
                <h2 className="text-center  mb-4">Contact Me</h2>
                <Form onSubmit={handleSubmit}>
                  <Form.Group controlId="formName" className="mb-3">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formMessage" className="mb-3">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Enter your message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Button variant="warning" type="submit">
                    Contact Me
                  </Button>
                </Form>
              </Container>
            </Col>
          </Row>
        </Container>

      </div>

    </>
  );
}


export default App;
