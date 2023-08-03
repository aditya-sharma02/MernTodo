// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Todo from './pages/Todo';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Update from './pages/Update';

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/update/:id' element={<Update />} />
        <Route path='/todo' element={<Todo />} />
      </Routes>
    </>
  );
}

export default App;
