import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: '3if5r9yb',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})

export interface NewsArticle {
  _id: string
  title: string
  slug: { current: string }
  publishedAt: string
  excerpt?: string
  mainImage?: {
    asset: {
      url: string
    }
  }
  body?: any[]
  category?: string
}

export async function getNews(): Promise<NewsArticle[]> {
  const query = `*[_type == "news"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage {
      asset->{
        url
      }
    },
    category
  }`
  return sanityClient.fetch(query)
}

export async function getNewsBySlug(slug: string): Promise<NewsArticle | null> {
  const query = `*[_type == "news" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    mainImage {
      asset->{
        url
      }
    },
    body,
    category
  }`
  return sanityClient.fetch(query, { slug })
}
