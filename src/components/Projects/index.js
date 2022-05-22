import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import ProjectList from '../ProjectList';

function Projects({currentSection}) {

  const { name, description } = currentSection;

    return (
        <section>
            <h1>{capitalizeFirstLetter(name)}</h1>
            <p>{description}</p>
            <ProjectList section={currentSection.name}/>
        </section>
    );
}

export default Projects;