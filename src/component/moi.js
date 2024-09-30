import React from "react";
import '../App.css'
import Moiphoto from '../assets/IMG_2062.jpg'

function Moi(){

    return(
    <div className="container_m">
        <h1 className="animate-text">Augustin Eloy</h1>
        <div className="moi_top">
                    <div className="container_presentation">
                        <h2>Présentation</h2>
                        <p>Je suis Augustin Eloy j'aime réaliser les projets de mes clients selon leurs attentes afin de faire de leur idées une réalité ! J'interviens de la création à l'optimisation (SEO) mais aussi pour régler tous type de bug sur les sites ! </p>
                    </div>
                    <div className="container_contact">
                        <h2>Contact</h2>
                        <p>Phone: 04 54 64 74 85</p>
                        <p>Email: eloiigus@gmail.com</p>
                        <p>Discord: AuggustinEloy</p>
                    </div>
        </div>
    <div className="moi_bot">
        <div className="container_frame">
            <h2>Framework</h2>
            <p>Python</p>
            <p>React.js</p>
            <p>Node.js</p>
            <p>React Native</p>
            <p>CSS</p>
            <p>Javascript</p>
        </div>
    </div>
</div>

    )
}
export default Moi;