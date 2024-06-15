// pages/index.tsx
import React from 'react';
import Header from './components/Header';
import CardSection from './components/CardSection';

const Home: React.FC = () => {
  return (
    <div>
      <Header titulo="Squirtle" />
      <CardSection titulo="Introdução">
        <p>Aqui vai o conteúdo da introdução.</p>
      </CardSection>
      <CardSection titulo="História">
        <p>Aqui vai o conteúdo da história.</p>
      </CardSection>
      <CardSection titulo="Habilidades">
        <p>Aqui vai o conteúdo das habilidades.</p>
      </CardSection>
      {/* Adicione outras seções conforme necessário */}
    </div>
  );
};

export default Home;
