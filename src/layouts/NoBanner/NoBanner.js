import Header from '../components/Header'
import Footer from '../components/Footer'

function NoBanner({ children }) {
  return (
    <div>
      <Header />
      <div className='container'>
        <div className='content'>
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NoBanner;