import React from 'react'
import Meta from './Meta';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children, title, kw, desc }) => {
    return (
        <div>
            <Meta title={title} kw={kw} desc={desc} />
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout
