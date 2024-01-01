import './App.css';
import Categories from './components/pages/Categories';
import Navbar from './components/pages/Navbar';
import ProductPage from './components/pages/ProductPage';

function App() {
  return (
    <div className='bg-[#EDEDED] min-h-screen'>
      <Navbar></Navbar>
      <Categories></Categories>
      <ProductPage></ProductPage>
    </div>
  );
}

export default App;
