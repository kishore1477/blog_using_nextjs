import React from 'react'
import styles from '../styles/Home.module.css'
import Link from  'next/link'
const Navbar = () => {
  return (
   <>
    <nav className={styles.mainnav}>
        <ul>
        {/* <Link href='/home'> <a><li>Home</li></a></Link>   */}

        <li> <Link href="/"><a>Home</a></Link></li>
        <li> <Link href="/about"><a>About</a></Link></li>
        <li> <Link href="/blog"><a>Blog</a></Link></li>
        <li> <Link href="/contact"><a>Contact</a></Link></li>
        
        </ul>
      </nav>
        {/* <hr/> */}
        </>

  )
}

export default Navbar
