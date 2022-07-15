import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { capitalizeFirstLetter} from'../../utils/helpers';

function Header(props) {

    const {
        navSections = [],
        setCurrentSection,
        currentSection,
        contactSelected,
        setContactSelected
    } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentSection.name);
    }, [currentSection]);

    return(
        <header className='flex-row px-1'>
            <h2>
                <Link to="/">
                    <span role="img" aria-label='logo'>LOGO</span>Armond Rodriguez
                </Link>
            </h2>
            
            <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <Link to="/" onClick={() => setContactSelected(false)}>
                        About
                    </Link>
                </li>
                    {navSections.map((section) => (
                        <li
                        className={`mx-1 ${currentSection.name === section.name && !contactSelected && 'navActive'}`}
                        key={section.name}
                        >
                        <Link to="/Projects">
                           
                                <span onClick = {() => {
                                    setCurrentSection(section)
                                    setContactSelected(false);
                                }} 
                                >
                                    {capitalizeFirstLetter(section.name)}
                                </span>
                                </Link>
                            </li>   
                    ))}

                    <li className="mx-2">
                     <Link to="/Contact" className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => {
                            setContactSelected(true)
                        }}
                        >Contact</span>
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