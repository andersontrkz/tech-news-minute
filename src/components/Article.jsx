import React from 'react';
import './styles/article.css';
import shareLinkedin from '../assets/images/linkedin-share-button.png'

export default function Article({ article }) {
  const { title, urlToImage, description, publishedAt, source: { name }, url } = article;

  return (
    <main className="article__container">
      <section className="article__section-image">
        <img src={urlToImage} alt={title} />
      </section>
      <section className="article__section-content">
        <h3>{ title }</h3>
        <p>{ description }</p>
        <section className="article__section-footer">
          <span>{ publishedAt.split('T')[0] }</span>
          <span>{ name.split('.')[0] }</span>
          
          
          <a href={ url }>{'Ver notícia completa >'}</a>
        </section>
      </section>
      <a className="article__section-social" href={ `https://www.linkedin.com/shareArticle?mini=true&url=${url}&title=${title}&summary=${description}&source=${name}` }>
        <img src={ shareLinkedin } alt="Share linkedin" />
      </a>

    </main>
  )
}
