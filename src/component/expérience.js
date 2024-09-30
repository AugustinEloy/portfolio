import React from "react";
import { Tilt } from 'react-tilt'
import Xp1 from '../assets/Screenshot 2024-09-15 at 19-13-22 Booki.png'
import Xp2 from '../assets/Screenshot 2024-09-15 at 19-14-33 Ohmyfood.png'
import Xp3 from '../assets/impression.png';
import Xp4 from '../assets/Screenshot 2024-09-15 at 19-15-14 Sophie Bluel - Architecte dintérieur.png'

const defaultOptions = {
	reverse:        false,  
	max:            35,    
	perspective:    1000,  
	scale:          1.1,   
	speed:          1000,   
	transition:     true,   
	axis:           null,   
	reset:          true,    
	easing:         "cubic-bezier(.03,.98,.52,.99)",   
}
function Expérience(){


    return(
        <div className="container_xp" >
            <div className="xps">
               <div className="xp">
               <Tilt options={defaultOptions} className="xp">
                        <img src={Xp1}/>
                </Tilt>
                            <div className="xp_text">
                                <h2>Réalisation d'un site de location imobiliere</h2>
                                    <h3>format: Desktop/téléphone</h3>
                            </div>
                 </div>
                 <div className="xp">
                 <Tilt options={defaultOptions} className="xp">
                        <img src={Xp2}/>
                </Tilt>
                            <div className="xp_text">
                                <h2>Réalisation d'un site web pour des livraisons de repas</h2>
                                    <h3>format: Desktop/téléphone</h3>
                            </div>

                 
                 </div>
                 <div className="xp">
                 <Tilt options={defaultOptions} className="xp">
                        <img src={Xp3}/>
                </Tilt>
                            <div className="xp_text">
                                <h2>Réalisation d'un site web d'une entreprise d'Impressions</h2>
                                    <h3>format: Desktop/téléphone</h3>
                            </div>
                </div>
                <div className="xp"> 
                <Tilt options={defaultOptions}>
                        <img src={Xp4}/>
                </Tilt>
                     <div className="xp_text">
                        <h2>Réalisation d'un site web d'Architecte d'interieur</h2>
                            <h3>format: Desktop/téléphone</h3>
                    </div>
                 </div>
            </div>  

        </div>
    )
}

export default Expérience;
