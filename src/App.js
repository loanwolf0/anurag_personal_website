import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Navbar from './components/navbar/Navbar';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';
import Projects from './pages/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/projects' element={<Projects/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
