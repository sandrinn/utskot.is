import { NewsArticle } from '../lib/sanity'

interface NewsCardProps {
  article: NewsArticle
}

export function NewsCard({ article }: NewsCardProps) {
  const date = new Date(article.publishedAt).toLocaleDateString('is-IS', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article className="news-card">
      {article.mainImage && (
        <img 
          src={article.mainImage.asset.url} 
          alt={article.title}
          className="news-card-image"
        />
      )}
      <div className="news-card-content">
        {article.category && (
          <span className="news-card-category">{article.category}</span>
        )}
        <h2 className="news-card-title">{article.title}</h2>
        <time className="news-card-date">{date}</time>
        {article.excerpt && (
          <p className="news-card-excerpt">{article.excerpt}</p>
        )}
      </div>
    </article>
  )
}
