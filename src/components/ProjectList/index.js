import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


//import project from '../../assets/images/projects/full-stack-project.png'

function ProjectList({ section }) {

    const [projects] = useState([
        {
            name: 'A to B Cars',
            section: 'projects',
            description: 'Have you ever wanted to buy a car, but been confused or mislead by today’s common car shopping sites? A to B is here to help, with a streamlined interface! Create an account to post a car to sell or save cars you’re interested in buying.',
            repo: 'https://github.com/dmoloney5/RUT-Proj2-Cars.git',
            deployed: 'https://a-to-b-cars-rut-proj2.herokuapp.com/homepage'
        },
        {
            name: 'Weather Dashboard',
            section: 'projects',
            description: 'This application is a weather dashboard. The application is intended to show the current weather along with the 5 day forecast of the searched city entered by the user. Upon searching for the city the application will be able to save previous searches in local storage so the user can access the information again.',
            repo: 'https://github.com/ArmondR/Weather-Dashboard',
            deployed: 'https://armondr.github.io/Weather-Dashboard/'
        },
        {
            name: 'Game Generator',
            section: 'projects',
            description: 'With this app you are given the choice between Single or Multi-Player video games. You will be presented with a selection of 8 games in either category with basic information about each game. This is possible because of the RAWG.io API.',
            repo: 'https://github.com/Cherboi/random-game-generator',
            deployed: 'https://cherboi.github.io/random-game-generator/'
        },
        {
            name: 'Null and Void News',
            section: 'projects',
            description: 'Null And Void News is here to pull unbiased news from all around the web! Easily find news from common categories such as Business, Entertainment, and Technology.',
            repo: 'https://github.com/dmoloney5/rut-project3-newsapi.git',
            deployed: 'https://rut-project3-newsapi.herokuapp.com/'
        },
        // {
        //     name: 'Project 5',
        //     section: 'projects',
        //     description: 'test',
        //     repo: '',
        //     deployed: ''
        // }
    ])

    const currentProjects = projects.filter((project) => project.section === section);
    return (
        <Row xs={1} md={2} className="g-4">
        {currentProjects.map((image, i) => (
          <Col 
          key={image.name}
          >
            <Card 
            //style={{ width: '30rem' }}
            className='cards'
            >
              <Card.Img 
              variant="top" 
              src={require(`../../assets/images/${section}/${i}.png`)}
              alt={image.name}
              key={image.name}
              className= 'work' 
              />
              <Card.Body>
                <Card.Title>{image.name}</Card.Title>
                <Card.Text>
                  {image.description}
                </Card.Text>
                <div className="card-link-container">
                    <Card.Link className="card-link" href={image.deployed} target="_blank">Deployed Site</Card.Link>
                    <Card.Link className="card-link" href={image.repo} target="_blank">Site Repo</Card.Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
        
    )
}

export default ProjectList;