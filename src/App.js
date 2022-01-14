import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Footer from './components/Footer';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <header className=''>
          <Navbar/>
        </header>
          <main className="flex-grow">
            <Routes>
              <Route path="/oriental-mana/" element={<Home />} />
              <Route path="/oriental-mana/products" element={<Products />} />
            </Routes>
            {/* <Routes>
              <Route exact path="/oriental-mana" element={<Home />} />
              <Route path="/oriental-mana/products" element={<Products/>} />
            </Routes> */}
          </main>
     
        <footer>
          <Footer />
        </footer>
      </div>
      
    </BrowserRouter>
  );
}

export default App;
