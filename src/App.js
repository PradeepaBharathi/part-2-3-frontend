import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Loading from './components/Loading';
import Settings from './components/Settings';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element ={<Home/>}/>
          <Route path="/loading" element ={<Loading/>}/>
          <Route path="/settings" element ={<Settings/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
