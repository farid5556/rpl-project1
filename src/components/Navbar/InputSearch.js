'use client'

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRef } from "react"
import { useRouter } from "next/navigation"

const InputSearch = () => {
  const searchRef = useRef()
  const router = useRouter() 

  const handleSearch = (event) => {
    if (event.key === 'Enter' || event.type === 'click') {
      event.preventDefault()
      const keyword = searchRef.current.value
      router.push(`/search/${keyword}`)
    }
  }

  return (
    <div>
        <input 
            type="text" 
            placeholder="Cari Anime.." 
            className="p-2 rounded-md pl-3"
            ref={searchRef}
            onKeyDown={handleSearch}
        />
        <button>
            <MagnifyingGlass size={27} 
            className="absolute top-7 end-7"
            onClick={handleSearch}/>
        </button>
    </div>
  )
}

export default InputSearch