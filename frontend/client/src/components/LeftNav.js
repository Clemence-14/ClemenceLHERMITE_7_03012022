import React from "react";
import { NavLink } from "react-router-dom";

// Modifications
const LeftNav = () => {
    return (
        <div className="left-nav-container">
            <div className="icons">
                <div className="icons-bis">
                    <NavLink to='/' exact activeClassName="active-left-nav">
                    <img src="./img/house-solid.svg" alt="groupomania" />
                    </NavLink>
                    <br />
                    <NavLink to='/trending' exact activeClassName="active-left-nav">
                    <img src="./img/rocket-solid.svg" alt="rocket" />
                    </NavLink>
                    <br />
                    <NavLink to='/profil' exact activeClassName="active-left-nav">
                    <img src="./img/user-solid.svg" alt="utilisateur" />
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default LeftNav;