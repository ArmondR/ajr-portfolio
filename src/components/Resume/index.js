import React from 'react';
import { Link } from 'react-router-dom';


function Resume() {
    const frameworks = ["HTML", "CSS", "JavaScript", "JQuery", "AJAX", "Node.js", "React", "GraphQL",
    "MongoDB", "Express.js", "Mongoose.js"];

    const otherSkills = ["3D Design", "Graphic Design", "AutoDesk Maya", "Pixologic ZBrush", "Adobe Creative Cloud"];

    return (
        <section >
            <span>View and Download </span><Link to={require("../../assets/images/Armond Rodriguez Technical Resume.pdf")} target="_blank">Resume</Link>
        <div className="skills">
            <div>
                <h3>
                    Languages/ Frameworks:
                </h3>
                <ul>
                    {frameworks.map(frameworkList => <li key={frameworkList}> {frameworkList} </li>)}
                </ul>
            </div>

            <div>
                <h3>Other Skills:</h3>
                <ul>
                    {otherSkills.map(otherSkillsList => <li key={otherSkillsList}> {otherSkillsList} </li>)}
                </ul>
            </div>
        </div>
          

        </section>
    )
}

export default Resume;