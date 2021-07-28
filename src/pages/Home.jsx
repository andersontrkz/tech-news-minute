import React, { useContext } from 'react';
import Article from '../components/Article';
import Context from '../context/Context';
import logoNews from '../assets/images/logo-news.png'
import logoBR from '../assets/images/br.png'
import logoUS from '../assets/images/us.png'
import logoFR from '../assets/images/fr.png'

import './styles/home.css'

export default function Home() {
  const { news, setFetchNews } = useContext(Context);

  const selectNewsCountry = ({ target }) => {
    setFetchNews(target.id);
  }

  return (
    <div>
      <header className="header__section">
        <img src={ logoNews } alt="Logo" />
      </header>
      <main className="home__content-section">
        <section className="home__select-country">
          <img id="br" src={ logoBR } alt="" onClick={ selectNewsCountry }/>
          <img id="us" src={ logoUS } alt="" onClick={ selectNewsCountry }/>
          <img id="fr" src={ logoFR } alt="" onClick={ selectNewsCountry }/>
        </section>
        { news[0] ? news.map((article, index) => <Article article={article} key={index}/>) : 'Carregando...' }
      </main>
      <footer>
        <span>©, Tech News Minutes - Todos os direitos reservados.</span>
      </footer>
    </div>
  )
}
