import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import projImg5 from "../assets/img/project-img5.png";
import projImg6 from "../assets/img/project-img6.png";
import projImg7 from "../assets/img/prjct1.png";
import projImg8 from "../assets/img/CoinStats.png";
import projImg9 from "../assets/img/RPS.png";
import projImg10 from "../assets/img/process.png";
import projImg11 from "../assets/img/popcorn.png";
import projImg12 from "../assets/img/search.png";
import projImg13 from "../assets/img/ttt.png";
import projImg14 from "../assets/img/DSA.png";



import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const certificates = [
    {
      title: "Goldman Sachs",
      description: "Software Engineering Job Simulation",
      imgUrl: projImg1,
    },
    {
      title: "Google Analytics Academy",
      description: "Google Analytics for Beginners",
      imgUrl: projImg2,
    },
    {
      title: "TATA",
      description: "Data Visualisation",
      imgUrl: projImg3,
    },
    {
      title: "IBM SkillsBuild",
      description: "Internship on Emerging Technologies",
      imgUrl: projImg4,
    },
    {
      title: "NIPAM",
      description: "IP Awareness Training Program",
      imgUrl: projImg5,
    },
    {
      title: "IBM SkillsBuild",
      description: "Data Science",
      imgUrl: projImg6,
    },
  ];

const prjct=[
  {
    title: "Project-portfolio",
      description: "MERN",
      imgUrl: projImg7,
  },

  {
    title: "Crypto-Tracker",
      description: "MERN",
      imgUrl: projImg8,
  },

  {
    title: "Project-RPS",
      description: "HCJ",
      imgUrl: projImg9,
  },

  {
    title: "Schedule-Visualizer",
      description: "HCJ",
      imgUrl: projImg10,
  },

  {
    title: "popcorn",
      description: "HCJ",
      imgUrl: projImg11,
  },

  {
    title: "Search-automation",
      description: "HCJ",
      imgUrl: projImg12,
  },

    {
    title: "ttt",
      description: "HCJ",
      imgUrl: projImg13,
  },


]
 
    


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects & Education</h2>
                <p>----------------------------------------------</p>
                
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Project</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Education</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Credential</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <h2>Projects</h2>
                    <p class="result">"I take the vision which comes from dreams and apply the magic of Science and Technology, adding the heritage of my profession and my knowledge of languages,frameworks and platforms to create a design." </p>

                    <Row >
                    <div class="imgborder" >
                    <img src={projImg10} class="mt" alt="projects"></img>
                    <div class="overlay">
                    <a href="#">
                    <div class="text">Process Scheduling Visualizer</div>
                    </a>
                    <div class="tx"></div>
                    </div>
                  
                </div>
                </Row>

                  <Row >
                    <div class="imgborder" >
                    <img src={projImg14} class="mt" alt="projects"></img>
                    <div class="overlay">
                    <a href="#">
                    <div class="text">DSA Tracker</div>
                    </a>
                    <div class="tx"></div>
                    </div>
                  
                </div>
                </Row>

                <Row >
                    <div class="imgborder" >
                    <img src={projImg11} class="mt" alt="projects"></img>
                    <div class="overlay">
                    <a href="#">
                    <div class="text">POPCORN</div>
                    </a>
                    <div class="tx"></div>
                    </div>
                  
                </div>
                </Row>

                <Row >
                    <div class="imgborder" >
                    <img src={projImg12} class="mt" alt="projects"></img>
                    <div class="overlay">
                    <a href="#">
                    <div class="text">search-automation</div>
                    </a>
                    <div class="tx"></div>
                    </div>
                  
                </div>
                </Row>

                    <Row>
                    <div class="imgborder" >
                    <img src={projImg7} class="mt" alt="projects"></img>
                    <div class="overlay">
                    <a href="#">
                    <div class="text">My portfolio</div>
                    </a>
                    <div class="tx"></div>
                    </div>
                  
                    </div>
                    </Row>

                <Row >
                    <div class="imgborder" >
                    <img src={projImg8} class="mt" alt="projects"></img>
                    <div class="overlay">
                    <a href="#">
                    <div class="text">COIN STATS</div>
                    </a>
                    <div class="tx"></div>
                    </div>
                  
                </div>
                </Row>

                <Row >
                    <div class="imgborder" >
                    <img src={projImg9} class="mt" alt="projects"></img>
                    <div class="overlay">
                    <a href="#">
                    <div class="text">Rock Paper Scissor</div>
                    </a>
                    <div class="tx"></div>
                    </div>
                  
                </div>
                </Row>

                <Row >
                <div class="imgborder" >
                <img src={projImg13} class="mt" alt="projects"></img>
                <div class="overlay">
                <a href="#">
                <div class="text">Tic Tac Toe</div>
                </a>
                <div class="tx"></div>
                </div>
              
            </div>
            </Row>


                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      
                      { <Row>
                        <ul>
                        
                        <h2>Education</h2>

                          <li>
                          <h6 class="KEC">Krishna Engineering College , Abdul Kalam Technical University(Formerly UPTU) , India ---------------(2021 - 2025)</h6>
                          <p>Bachelor of Technology(B.Tech) in Computer Science Engineering  CGPA : 8.19/10---------------(currently)</p>
                          </li>

                          <li>
                          <h6 class="KEC">Government Boys Senior Secondary School , India ---------------(2020 - 2021)</h6>
                          <p>CBSE (Class XII) , Aggregate : 86%</p>
                          </li>

                          <li>
                          <h6 class="KEC">Government Boys Senior Secondary School , India ---------------(2018 - 2019)</h6>
                          <p>CBSE (Class X) , Aggregate : 93.2%</p>
                          </li>
                          
                        </ul>
                        
                        
                      </Row> }
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      
                      <Row>
                      <h2>Credentials</h2>
                        {
                          certificates.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
