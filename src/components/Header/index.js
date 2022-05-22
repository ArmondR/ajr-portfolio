import React, { useEffect } from 'react';
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
            <a href="/">
                <span role="img" aria-label='logo'>LOGO</span>Armond Rodriguez
                </a>
            </h2>
            
            <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a href="#about">
                        About me
                    </a>
                </li>
                    {navSections.map((section) => (
                        <li
                            className={`mx-1 ${currentSection.name === section.name && 'navActive'}`}
                            key={section.name}
                            >
                                <span onClick = {() => {
                                    setCurrentSection(section)
                                }} 
                                >
                                    {capitalizeFirstLetter(section.name)}
                                </span>
                            </li>   
                    ))}
                     <li className="mx-2">
                    <span>Contact</span>
                </li>
                <li className="mx-2">
                    <span>Resume</span>
                </li>
            </ul>
            </nav>
        </header>
    );
}

export default Header;