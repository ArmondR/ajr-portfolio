import React, { useState } from 'react'
//import 'bootstrap/dist/css/bootstrap.min.css';

//import project from '../../assets/images/projects/full-stack-project.png'

function ProjectList({ section }) {

    const [projects] = useState([
        {
            name: 'A to B Cars',
            section: 'projects',
            description: 'test'
        },
        {
            name: 'Weather Dashboard',
            section: 'projects',
            description: 'test'
        },
        {
            name: 'Game Generator',
            section: 'projects',
            description: 'test'
        },
        {
            name: 'Project 4',
            section: 'projects',
            description: 'test'
        },
        {
            name: 'Project 5',
            section: 'projects',
            description: 'test'
        }
    ])

    const currentProjects = projects.filter((project) => project.section === section);
    return (
        
       <div>
           <div className="flex-row">
               {currentProjects.map((image, i) => (
                   <img
                   src={require(`../../assets/images/${section}/${i}.png`)}
                   alt={image.name}
                   className="img-thumbnail mx-1"
                   key={image.name}
                   />
               ))}
               
           </div>
       </div>
    )
}

export default ProjectList;