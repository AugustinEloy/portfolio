
import Home from '../src/component/Home'
import  Xp from '../src/component/expérience'
import './App.css';
import Moi from './component/moi';
import Last from './component/Last';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/expérience' element={<Xp/>} />
      <Route path='AugustinEloy' element={<Moi/>} />
      <Route path='/last' element={<Last />} />
      </Routes>
      </Router> 
    
    </div>
  );
}

export default App;
