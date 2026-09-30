import logo from './logo.svg';
import './App.css';
import {Routes,Route,Link, NavLink} from "react-router-dom";
import NotFound from './Components/NotFound';
import Support from './Components/Support';
import Home from './Components/Home';
import Lab from './Components/Lab';
import Header from './Components/Header';

function App() {
  return (
    <div className="App">
      <nav>
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/Lab'>Lab</NavLink></li>
            <li><NavLink to='/Support'>Support</NavLink></li>
           <li><NavLink to='*'>NoWhere</NavLink></li>
          </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Header/>}>

           {/* default route */}
           <Route index element={<Home/>}></Route>
          <Route path="/Lab" element={<Lab/>}></Route>
          <Route path="/Support" element={<Support/>}></Route>
          <Route path="*" element={<NotFound/>}></Route>
        </Route>
         
            
      </Routes>
    </div>
  );
}

export default App;
