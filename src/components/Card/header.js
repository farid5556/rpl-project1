import Link from "next/link"

const Header = ({ title, linkTitle, linkHref }) => {
    return (
      <div className='p-4 flex justify-between'>
        <h1 className='text-2xl font-bold text-color-primary'>{title}</h1>
        {linkTitle && linkHref ? <Link href={linkHref} className='text-color-primary hover:text-color-accent text-xln underline hover:text-red-600'>
        {linkTitle}</Link> : null}
      </div>
    )
}

export default Header

