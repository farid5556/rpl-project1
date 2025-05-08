import Link from "next/link"

const Page = () => {
  return (
      <div className="text-color-primary text-center mt-60">
       <h1 className="text-bold text-3xl">Halaman Kosong</h1>
       <Link href='/'>
        <h3 className="mt-2 hover:text-color-accent transition-all underline">Kembali</h3>
        </Link>
      </div>
  )
}

export default Page