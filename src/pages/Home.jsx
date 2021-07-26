import React, { useContext } from 'react';
import Article from '../components/Article';
import Context from '../context/Context';
import logoNews from '../assets/images/logo-news.png'

import './styles/home.css'

export default function Home() {
  const { news } = useContext(Context);

  return (
    <div>
      <header>
        <img src={ logoNews } alt="Logo" />
      </header>
      { news.map((article, index) => <Article article={article} key={index}/>) }
    </div>
  )
}