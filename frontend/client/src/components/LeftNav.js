import React from "react";
import { Navlink } from 'react-router-dom';

// Modifications
const LeftNav = () => {
    return (
        <div className="left-nav-container">
            <div className="icons">
                <div className="icons-bis">
                    <Navlink to='/' exact activeClassName="active-left-nav">
                    <i class="fas fa-home"></i>
                    </Navlink>
                    <br />
                    <Navlink to='/trending' exact activeClassName="active-left-nav">
                    <i class="fa-solid fa-rocket"></i>
                    </Navlink>
                    <br />
                    <Navlink to='/profil' exact activeClassName="active-left-nav">
                    <i class="fa-solid fa-user"></i>
                    </Navlink>
                </div>
            </div>
        </div>
    );
};

export default LeftNav;