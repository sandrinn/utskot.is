import { useEffect, useState } from 'react'
import { getNews, type NewsArticle } from '../lib/sanity'
import { NewsCard } from './NewsCard'

export function NewsList() {
  const [articles, setArticles] = useState<NewsArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getNews()
      .then(setArticles)
      .catch((err) => {
        console.error('Sanity fetch error:', err)
        setError(err.message)
      })
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div className="loading">Loading news...</div>
  if (error) return <div className="error">Error: {error}</div>
  if (articles.length === 0) return <div className="empty">No news articles yet.</div>

  return (
    <div className="news-list">
      {articles.map((article) => (
        <NewsCard key={article._id} article={article} />
      ))}
    </div>
  )
}
