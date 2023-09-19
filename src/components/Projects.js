import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/project-img4.png";
import expImg1 from "../assets/img/exp-img1.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {

  const projects = [
    {
      title: "AI Summarizer",
      imgUrl: projImg3,
      TechStack: "ReactJS, Javascript, Tailwind CSS,RapidAPI,Redux Toolkit",
      link: "https://ai-summarizer-23.netlify.app/"
    },
    {
      title: "Google Portfolio Page",
      imgUrl: projImg2,
      TechStack: "HTML, CSS, Javascript, ReactJS",
      link: "https://aryan-seth-28.netlify.app/"
    },
    {
      title: "Google Keep Clone",
      imgUrl: projImg1,
      TechStack: "HTML, CSS, Javascript, ReactJS, Material UI",
      link:"https://github.com/aryan-prog/Google-Keep-Clone"
    },
    {
      title: "Weather App",
      imgUrl: projImg4,
      TechStack: "HTML, CSS, Javascript, ReactJS, OpenWeather API",
      link:"https://weather-app-seth.netlify.app/" 
    }
  ];
  const experience = [
    {
      title: "Web Developer",
      company: "Start From Scratch",
      imgUrl: expImg1,
      TechStack: "HTML, CSS, Javascript, ReactJS",
      link: "https://sfslive.com/"
    }
  ];

  return (
    <section className="project" id="endeavors">
      <Container>
        <Row>
          <Col size={12}>
              <div className= "animate__animated animate__fadeIn">
                <h2>Endeavors</h2>
                <p> Showcasing a journey of work experiences and impactful projects.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Work Experiences</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className="animate__animated animate__slideInUp">
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
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
                    <Tab.Pane eventKey="second">
                    {
                          experience.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>To be updated soon</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt='bg'></img>
    </section>
  )
}
