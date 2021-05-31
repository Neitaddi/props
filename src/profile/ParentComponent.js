import React from 'react'
import './ParentComponent.css'
import Profil from '../profile/Profil'
function ParentComponent() {
    const handleAlert = (fullName) => alert(`Hi! ${fullName}`);
    return (
        <div>
               <Profil 
        fullName="Neit Addi Mariem"
        bio="GoMyCode Student"
        profession="full-stack developer"
        handleAlert={handleAlert}
            >

        <div className="img">
            <div id="background" class="clip"></div>
            <div id="clip3" class="clip"></div>
            <div id="clip4" class="clip"></div>
            <div id="clipa" class="clip"></div>
            <div id="clip1" class="clip"></div>
            <div id="clip2" class="clip"></div>
            <div id="clipb" class="clip"></div>
        </div>
            </Profil>
        </div>
    )
}

export default ParentComponent
