import './App.css';
import Home from './conatiners/home/Home';
import Blog from './conatiners/blog/Blog';
import { Routes, Route } from 'react-router-dom';



function App() {
  return (
    <>
      <Routes>
        <Route exact path = '/' element={<Home />}></Route>
        <Route exact path='/blog' element={<Blog />}></Route>
      </Routes>
    </>
  );
}

export default App;
