import React, { useContext } from 'react';
import Article from '../components/Article';
import Context from '../context/Context';

export default function Home() {
  const { news } = useContext(Context);

  return (
    <div>
      <header>
        <h1>Menu</h1>
      </header>
      { news.map((article, index) => <Article article={article} key={index}/>) }
    </div>
  )
}
