
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Calculadora from './componentes/Calculadora';
import Home from './componentes/Home';



function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/calculadora' element={<Calculadora />}></Route>
          <Route path='/' element={<Home/>}></Route>
      </Routes>
      </BrowserRouter>
      </>
    // <div className="App">
    // <Calculadora></Calculadora>
    // </div>
  );
}

export default App;
