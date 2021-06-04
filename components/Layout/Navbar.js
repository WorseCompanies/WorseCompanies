import React from 'react'
import navStyles from '../../styles/Layout/Navbar.module.css'
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className={navStyles.navbar}>
            <div className={navStyles.logo}>
                <Link href='/'>
                    <a>
                        WorseCompanies
                    </a>
                </Link>
            </div>
            <div className={navStyles.navLink}>
                <a href="#">
                    Read Articles
               </a>
            </div>
        </nav>
    )
}

export default Navbar
