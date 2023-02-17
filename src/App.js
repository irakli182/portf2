import './App.css';
import First from './components/First';
import Second from './components/Second';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<First/>}/>
        <Route path='/second' element={<Second/>}/>
      </Routes>
    </div>
  );
}

export default App;
 