import React from 'react';
import projects from '../../projects.json';
import { Card } from 'react-bootstrap';

function Portfolio(props) {
  return (
    <div className="container">
      
      
      <Card>
      <img src={props.image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      
      <div className="card-body">
        <a href={props.github} className="card-link">Card link</a>
        <a href={props.deployedlink} className="card-link">Another link</a>
      </div>
    </Card>


    </div>
  );
}


function Projects () {  
  return (
  <>
  <div className="container">
  <h1>Portfolio</h1>
  </div>

    <div>
      {projects.map((project) => (
        <Portfolio 
        name={project.name}
        key={project.id}
        image={project.image}
        github={project.github}
        deployedapp={project.deployedapp}
        skills={project.skills}
        description={project.description}
        />
      ))}
    </div>
  </>
  );
}

export default Projects;