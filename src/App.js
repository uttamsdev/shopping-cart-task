import './App.css';
import Navbar from './components/pages/Navbar';
import ProductPage from './components/pages/ProductPage';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='h-8 bg-red-50'></div>
      <ProductPage></ProductPage>
    </div>
  );
}

export default App;
