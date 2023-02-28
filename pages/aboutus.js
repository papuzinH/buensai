import Head from 'next/head';
import AboutUsContainer from '../containers/AboutUsContainer/AboutUsContainer';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const About = () => {
  return (
    <>
      <Head>
        <title>Nosotros - Buensai</title>
      </Head>
      <Navbar page={{ page: 'aboutus' }} />
      <AboutUsContainer />
      <Footer />
    </>
  );
};

export default About;
