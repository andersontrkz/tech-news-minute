import React from 'react';
import './styles/article.css';
import shareLinkedin from '../assets/images/linkedin-share-button.png'

export default function Article({ article }) {
  const { title, image: { url: image }, description, datePublished, provider: { name: source } , url } = article;

  const generateArticleHashlink = () => {
    const hash = title.split(' ').join('-');
    return hash;
  }

  return (
    <main className="article__container" id={ generateArticleHashlink() }>
      <section className="article__section-image">
        <img src={image} alt={title} />
      </section>
      <section className="article__section-content">
        <h3>{ title }</h3>
        <p>{ description }</p>
        <section className="article__section-footer">
          <span>{ datePublished.split('T')[0] }</span>
          <span>{ source.charAt(0).toUpperCase() + source.substr(1)}</span>
          
          
          <a href={ url }>{'Ver notícia completa >'}</a>
        </section>
      </section>
      <a className="article__section-social" href={ `https://www.linkedin.com/shareArticle?mini=true&url=https://andersontrkz.github.io/#${generateArticleHashlink()}&title=${title}&summary=${description}&source=${source}` }>
        <img src={ shareLinkedin } alt="Share linkedin" />
      </a>

    </main>
  )
}
