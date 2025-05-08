import Card from '@/components/Card'
import Header from '@/components/Card/header'

const Page = async ({ params }) => {  // Params berfungsi untuk mengambil url inputan dari user 
  const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const keyword = params.keyword

  const response = await fetch(`${apiUrl}/anime?q=${keyword}`)
  const searchAnime = await response.json()

  return (
    <div>
      <Header title={`Hasil pencarian untuk ${keyword}`}/>
      <Card api={searchAnime} />
    </div>
  )
}

export default Page

