import React from 'react';
import projects from '../../projects.json';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Portfolio(props) {

  return (
    <div className="container">
      
      
      <Row className="justify-content-md-center">
        <Col lg="3">
          <div className="myCard">
            <img src={props.image} className="myCardImage" alt={props.name}/>
            
            <div className="card-body">
              <h5 className="card-title">{props.name}</h5>
              <p className="card-text">{props.description}</p>
            </div>
            
            <div className="card-body">
              <a href={props.github} className="card-link" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a>
              <a href={props.deployedlink} className="card-link" target="_blank" rel="noreferrer"><i class="fa-solid fa-display"></i></a>
            </div>

          </div>
        
        </Col>
      </Row>
    </div>
  );
}

function Content(props) {
  return <div className="content">{props.children}</div>;
}

function Projects () {  
  return (
  <>
  <div >
  <center><h1>Portfolio</h1></center>
  </div>

    <Content>
      {projects.map((project) => (
        <Portfolio 
        name={project.name}
        key={project.id}
        image={project.image}
        github={project.github}
        deployedlink={project.deployedlink}
        builtwith={project.builtwith}
        description={project.description}
        />
        
      ))}
      
    </Content>
  </>
  );
}

export default Projects;