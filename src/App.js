import Navbar from './components/Navbar'
import './App.css';
import Tools from './components/Tools';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import Choices from './components/Choices';
import Websites from './components/Websites';
import Seytech from './components/Seytech';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route  path='/' element={ <Home/>}/>
        <Route  path='/tools' element={ <Tools/>}/>
        <Route  path='/my-choices' element={ <Choices/>}/>
        <Route  path='/websites-to-follow' element={ <Websites/>}/>
        <Route  path='/seytech' element={ <Seytech/>}/>      
        </Routes>
    
    </div>
  );
}

export default App;
