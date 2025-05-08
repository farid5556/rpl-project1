import Image from "next/image"
import Link from "next/link"

const Card = ({ api }) => {
    return (
        <div className='grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 px-4'>
            {api.data.map((anime) => {
                return (
                    <Link href={`/${anime.mal_id}`} className="text-color-primary 
                    hover:text-color-accent transition-all">
                        <Image src={anime.images.webp.image_url} 
                        alt={anime.title} 
                        width={350} 
                        height={350} 
                        className="w-full max-h-64 object-cover" />
                        <h3 className="p-4 md:text-lg text-md">{anime.title}</h3>
                    </Link>
                    )
                })}
        </div>
    )
}

export default Card