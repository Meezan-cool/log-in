import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './Component/Login/Login';
import Forgot from './Component/Forget/Forgot';
import Help from './Component/Help/Help';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<Login/>}/>
          <Route  path='/forgot' element={<Forgot/>}/>
          <Route path='/help' element={<Help/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
