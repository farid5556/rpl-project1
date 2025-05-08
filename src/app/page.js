import Card from '../components/Card'
import Header from '../components/Card/header'

const Home = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL

  const response = await fetch(`${apiUrl}/top/anime?limit=8`)
  const topAnime = await response.json()

  return (
    <div>
      <Header 
      title='Anime terpopuler' 
      linkTitle='Lihat semua' 
      linkHref='/popular' 
      />
      <Card api={topAnime} />
    </div>
  )
}

export default Home

