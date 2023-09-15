import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, company, imgUrl,link,TechStack }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a href={link} target='_blank' rel='noopener noreferrer'>
      <div className="proj-imgbx">
        <img src={imgUrl} alt='projImg'/>
          <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{company}</span>
          <br/>
          <span>{TechStack}</span>
        </div>
      </div>
      </a>
    </Col>
  )
}
