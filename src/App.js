
import {BrowserRouter , Route, Routes } from 'react-router-dom';
import './App.css';
import Engineers from './Components.js/Engineers';
import Home from './Components.js/Home';
import Homeindex from './Components.js/Homeindex';
import Login from './Components.js/Login';
import Port from './Components.js/Port';
import Tasks from './Components.js/Tasks';
import Vessels from './Components.js/Vessels';


function App() {
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/admin" element={<Login/>}/>
        <Route path="/vessel" element={< Homeindex />}>
          <Route index element={< Vessels/>} />
          <Route path='engineer' element={<Engineers />} />
          <Route path='port' element={<Port />} />
          <Route path='task' element={<Tasks />} />
        </Route>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
