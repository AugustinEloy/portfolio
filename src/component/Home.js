import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text } from '@react-three/drei';
import '../App.css';
import fond from'../assets/software-developer-6521720_1920.jpg';

function FaceText({ position, rotation, text, onClick, fontSize }) {
  return (
    <group position={position} rotation={rotation} onClick={onClick}>
      <Text
        position={[0, 0, 0.01]}
        fontSize={fontSize} // Taille de texte ajustée
        color="black"
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </group>
  );
}

function Cube({ onFaceClick, size, fontSize }) {
  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[size, size, size]} /> {/* Taille dynamique du cube */}
      <meshStandardMaterial attach="material" color='#f0f0f0' />

      {/* Ajustement de la taille du texte en fonction de la taille du cube */}
      <FaceText 
        position={[0, 0, size / 2]} 
        rotation={[0, 0, 0]} 
        text="Projet/Réalisation" 
        fontSize={fontSize} 
        onClick={() => onFaceClick('/expérience')} 
      />
      <FaceText 
        position={[0, 0, -size / 2]} 
        rotation={[0, Math.PI, 0]} 
        text="Projets/Réalisation"  
        fontSize={fontSize} 
      />
      <FaceText 
        position={[-size / 2, 0, 0]} 
        rotation={[0, -Math.PI / 2, 0]} 
        text="Augustin Eloy"  
        fontSize={fontSize} 
        onClick={() => onFaceClick('/AugustinEloy')} 
      />
      <FaceText 
        position={[size / 2, 0, 0]} 
        rotation={[0, Math.PI / 2, 0]} 
        text="Augustin Eloy"    
        fontSize={fontSize} 
      />
      <FaceText 
        position={[0, size / 2, 0]}
        rotation={[-Math.PI / 2, 0, 0]} 
        text="Bots/Automatisation" 
        fontSize={fontSize} 
        onClick={()=> onFaceClick('/lastone')}
      />
      <FaceText 
        position={[0, -size / 2, 0]} 
        rotation={[Math.PI / 2, 0, 0]} 
        text="Bots/automatisation" 
        fontSize={fontSize} 
      />
    </mesh>
  );
}


function Cubeperso() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 800);
    };
    
    handleResize(); // Initial check
    window.addEventListener('resize', handleResize); // Listener for resize
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleFaceClick = (path) => {
    navigate(path);
  };

  // Ajustement des tailles du cube et du texte selon le type d'écran
  const cubeSize = isMobile ? 3.5 : 7; // Taille du cube ajustée
  const textSize = isMobile ? 0.3 : 0.7; // Taille du texte ajustée

  return (
    <div className="container_c">
      <img src={fond} className="fond" alt="background"/>
      <h1>Augustin Eloy Developer</h1>
      <div className="canvas-container">
        <Canvas 
          style={{ width: isMobile ? '90vw' : '40vw', height: isMobile ? '60vh' : '40vh' }} 
          camera={{ position: [0, 0, isMobile ? 12 : 20], fov: isMobile ? 50 : 45 }} // Ajustement de la caméra
        >
          <ambientLight intensity={2} />
          <directionalLight position={[6, 6, 6]} intensity={2} />
          <Cube onFaceClick={handleFaceClick} size={cubeSize} fontSize={textSize} /> {/* Passer les tailles */}
          <OrbitControls />
        </Canvas>
      </div>
    </div>
  );
}

export default Cubeperso;

