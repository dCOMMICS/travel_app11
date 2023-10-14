import Image from "next/image"
import Link from "next/link"


const NavBar = () => {
  return (
    <nav className="border-2 border-red-600 flexBetween max-container padding-container relative z-30 py-5" >

<Link href="/">
    <Image src="/hilink-logo.svg" alt="logo" width={74} height={29}/>
</Link>

    </nav>
  )
}

export default NavBar
