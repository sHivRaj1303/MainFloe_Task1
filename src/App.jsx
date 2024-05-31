import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Services from './components/Services';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<>  <Navbar/> <Home /><Footer/></> 
    },
    {
      path: '/about',
      element:<>  <Navbar/> <About /><Footer/></> 
    },
    {
      path: '/services',
      element:<>  <Navbar/> <Services /><Footer/></> 
    },
    {
      path: '/contact',
      element:<>  <Navbar/> <Contact /><Footer/></> 
    }
  ]);

  return (
    <RouterProvider router={router}>
     
    </RouterProvider>
  );
}

export default App;
