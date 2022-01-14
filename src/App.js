import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className=''>
        <Navbar/>
      </header>
      <Router>
        <main className="flex-grow">
          {/* <Home /> */}
          <Routes>
            <Route exact path="/oriental-mana" element={<Home />} />
            <Route path="/oriental-mana/products" element={<Products/>} />
          </Routes>
        </main>
      </Router>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
