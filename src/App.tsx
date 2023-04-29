import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Detail from './page/Detail/Detail';
import Main from './page/Main/Main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/detail/:id" element={<Detail/>} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
