/** 
* @copyright 2025 soumitra ghosh
* @license Apache-2.0
*/

import { useRef } from "react";
import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const Navbar = ({ navOpen }) => {
    const lastActiveLink = useRef();
    const activeBx = useRef();
    const navItems = [
        {
          label: 'Home',
          link: '#home',
          className: 'nav-link active',
          ref: lastActiveLink
        },
        {
          label: 'About',
          link: '#about',
          className: 'nav-link'
        },
        {
          label: 'Work',
          link: '#work',
          className: 'nav-link'
        },
        {
          label: 'Reviews',
          link: '#reviews',
          className: 'nav-link'
        },
        {
          label: 'Contact',
          link: '#contact',
          className: 'nav-link md:hidden'
        }
      ];

    return(
        <nav className={'Navbar ' + navOpen ? 'active' : ''}>
            {
                navItems.map(({ label, link, className, ref }, key) => (
                    <a
                    href={link}
                    key={key}
                    ref={ref}
                    className={className}
                    onClick={null}
                    >
                        {label}
                    </a>
                ))
            }
            <div className="active-box" ref={activeBx}>

            </div>
        </nav>
    )
}

Navbar.PropTypes = {
    navOpen: PropTypes
}

export default Navbar;