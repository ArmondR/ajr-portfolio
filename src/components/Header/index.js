import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { capitalizeFirstLetter} from'../../utils/helpers';

function Header(props) {

    const {
        navSections = [],
        setCurrentSection,
        currentSection,
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentSection.name);
    }, [currentSection]);

    return(
        <header className='flex-row px-1'>
            <h2>
                <Link to="/">
                    <h1>Armond Rodriguez</h1>
                </Link>
            </h2>
            
            <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <Link to="/">
                        About
                    </Link>
                </li>
                    {navSections.map((section) => (
                        <li
                        className={`mx-2 ${currentSection.name === section.name}`}
                        key={section.name}
                        >
                        <Link to="/Projects">
                           
                                <span onClick = {() => {
                                    setCurrentSection(section)
                                }} 
                                >
                                    {capitalizeFirstLetter(section.name)}
                                </span>
                                </Link>
                            </li>   
                    ))}

                    <li className="mx-2">
                     <Link to="/Contact" className="mx-2">
                        <span>
                            Contact
                        </span>
                    </Link>
                    </li>

                    <li className="mx-2">
                <Link to="/Resume" className="mx-2">
                    <span>Resume</span>
                </Link>
                </li>
            </ul>
            </nav>
        </header>
    );
}

export default Header;