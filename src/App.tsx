import Hero from './components/Hero';
import Story from './components/Story';
import Products from './components/Products';
import Reseller from './components/Reseller';
import Party from './components/Party';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Hero />
      <Story />
      <Products />
      <Reseller />
      <Party />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
