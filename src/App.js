import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className=''>
        <Navbar/>
      </header>
      <main className="flex-grow">
        {/* <Home/> */}
        <Products/>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
