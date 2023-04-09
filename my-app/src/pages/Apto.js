import Apto from '../components/Apto';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Aptoid() {
  const showFooter = false;

  return (
    <header>
      <Header />
      <Apto />
      {showFooter ? <Footer /> : null}
    </header>
  );
}

export default Aptoid;
