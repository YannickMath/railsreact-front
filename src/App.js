import './App.css';
import Welcome from './components/Welcome';
import Signup from './components/Signup';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
 
  return (
    <Router>
 
    {/* <Welcome /> */}
      <Routes>
      <Route  path="/" element={<Welcome />} />
          <Route path="/signup" element={<Signup />} />
       
      </Routes>
    </Router>
  );
}

export default App;
