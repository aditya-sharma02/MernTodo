import React from "react";
import "../styles/navbar.css"
const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <div className="navheading">Welcome to Task Manager</div>
                <a className='link' href="/">Home</a>
                <a className='link' href="/todo">Todo page</a>
            </div>
        </>
    )
}

export default Navbar;