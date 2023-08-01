import './App.css';
import { Route, Routes } from 'react-router-dom';

import Home from './Components/Home'
import Photography from './Components/Photography'
import About from './Components/About'
import Engineering from './Components/Engineering'

function App() {
  return (
    /*<div className="App">
      <header className="App-header">
      </header>
      <body>

      </body>
    </div>*/
    <div className="App">
      <Routes>
        <Route path='/About' element={ About() }/>
        <Route path='/Engineering' element={ Engineering() }/>
        <Route path='/Photography' element={ Photography() }/>
        <Route path='/' element={ Home() }/>
      </Routes>
    </div>
  );
}

export default App;
