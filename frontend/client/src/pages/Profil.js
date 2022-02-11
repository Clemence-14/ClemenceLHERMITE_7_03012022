import React, { useContext } from "react";
import Log from '../components/Log';
import UpdateProfil from "../components/Profil/UpdateProfil";
import { UidContext } from "../components/Routes/AppContext";

const Profil = () => {
    const uid = useContext(UidContext);
    return (
        <div className="profil-page">
            {uid ? (
                <UpdateProfil />
            ) : (
            <div className="log-container">
                <Log signin={false} signup={true}/>
                <div className="img-container">
                    <img src="./img/icon-above-font.png" alt="Logo Groupomania" />
                </div>
            </div>
            )}
        </div>
    );
};

export default Profil;