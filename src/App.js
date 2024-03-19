import './App.css';
import "./component/navbar/navbar.css"

import Navbar from "./component/navbar/navbar";

import { BrowserRouter } from 'react-router-dom';
import Routerr from './Router';
import Form from './component/navbar/form';



function App() {
  return (
    <div className="App">
       <BrowserRouter>
       <Navbar />
       <Routerr/>
       <Form/>
       </BrowserRouter>
    </div>
  );
}

export default App;
