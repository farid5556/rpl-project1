import Link from "next/link"
import InputSearch from "./InputSearch"

const Navbar = () => {
  return (
    <div>
        <header className="bg-color-accent p-5">
            <div className="flex justify-between items-center">
                <Link href="/" className="text-white text-xl font-bold">GueAnime</Link>
                <InputSearch />
            </div>
        </header>
    </div>
  )
}

export default Navbar