
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CartProvider from './context/CartProvider.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from '../layouts/Layout.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CartProvider>
    <Layout>
      <App />
    </Layout>
    </CartProvider>
  </BrowserRouter>

)
