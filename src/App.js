import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Footer from './components/Footer'

function App() {
  return (
    // <div className="App">
    //   <Navbar/>
    //   <Home/>
    //   <Footer />
    // </div>
    <div class="flex flex-col min-h-screen">
      <header className=''>
        <Navbar/>
      </header>
      <main class="flex-grow">
        <Home/>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
