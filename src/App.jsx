import { Route, Routes } from 'react-router';
import './App.css';
import BlogPage from './components/pages/BlogPage';
import ContactPage from './components/pages/ContactPage';
import HomePage from './components/pages/HomePage';
import ProductDetailsPage from './components/pages/ProductDetailsPage';
import ProductListPage from './components/pages/ProductListPage';

function App() {
 

  return (
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/product-list" element={<ProductListPage/>} />
      <Route path="/product-details" element={<ProductDetailsPage/>} />
      <Route path="/contact " element={<ContactPage/>} />
      <Route path="/blog" element={<BlogPage/>} />
    </Routes>
  );
}

export default App


