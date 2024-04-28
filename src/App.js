import './App.css';
import {Routes, Route} from 'react-router-dom';
import Main from './components/Main';
import About from './components/About';
import News from './components/News';

function App() {
  return (
    <div className="App">

      <Routes>

        <Route path="" element={<Main/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/news" element={<News/>}/>

      </Routes>
      
    </div>
  );
}

export default App;
