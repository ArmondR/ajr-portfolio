import React from 'react';

function Header() {

    function sectionSelected(name) {
        console.log(`${name} clicked`)
    }

    const navSections = [
        {name: "my work"},
        { name: "resume"}
    ]

    return(
        <header>
            <a href="/">
                <span role="img" aria-label='logo'>LOGO</span>
            </a>
            <nav>
            <ul className="flex-row">
                <li className="mx-2">
                    <a href="#about">
                        About me
                    </a>
                </li>
                <li>
                    <span>Contact</span>
                </li>
                    {navSections.map((section) => (
                        <li
                            className="mx-1"
                            key={section.name}
                            >
                                <span onClick ={() => sectionSelected(section.name)} >
                                    {section.name}
                                </span>
                            </li>   
                    ))}
            </ul>
            </nav>
        </header>
    );
}

export default Header;