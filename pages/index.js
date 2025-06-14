import Head from 'next/head';
import Navbar from '../components/Navbar/Navbar';
import Features from '../components/Features/Features';
import Footer from '../components/Footer/Footer';
import Hero from '../components/Hero/Hero';
import { faLightbulb, faSmile } from '@fortawesome/free-regular-svg-icons';
import { faWind, faLeaf } from '@fortawesome/free-solid-svg-icons';
//import { doc } from 'prettier';

const dataItems = [
  {
    icon: faLightbulb,
    title: 'Estimula tu mente',
    text: 'Promueve la mejora de tu percepción, paciencia y creatividad',
    id: '1',
  },
  {
    icon: faWind,
    title: 'Mejora el ecosistema',
    text: 'La calidad del aire que te rodea se verá beneficiado',
    id: '2',
  },
  {
    icon: faLeaf,
    title: 'Conexión con la naturaleza',
    text: 'lleva tu ambiente a un plano distinto',
    id: '3',
  },
  {
    icon: faSmile,
    title: 'Tranquilidad',
    text: 'Relaja y reduce el estrés ocasionado po la vida diaria',
    id: '4',
  },
];

export default function Home() {
  const dataPage = { page: 'index' };

  return (
    <>
      <Navbar page={dataPage} />
      <Hero />
      <Features dataItems={dataItems} />
      <Footer />
    </>
  );
}
