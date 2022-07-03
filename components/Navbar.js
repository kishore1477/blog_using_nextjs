import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

import { AiOutlineShoppingCart } from 'react-icons/ai';
const Navbar = () => {
  return (
    <div className='m-0 p-0  shadow flex justify-center flex-col md:justify-start  md:flex-row items-center'>

      <div className='px-4 mt-2'>
        <Link href="/"><a >
        <Image width={200} height={40} src="/logo.webp" alt="logo" /></a></Link>
      </div>
      <div className='nav'>
        <ul className='flex space-x-2 font-bold '>

          <Link href="/mugs"><a ><li className='hover:border-b-2 hover:border-blue-500 '>Mugs</li></a></Link>
          <Link href="/tshirts"><a ><li className='hover:border-b-2 hover:border-blue-500  '>Tshirts</li></a></Link>
          <Link href="/hoodies"><a ><li className='hover:border-b-2 hover:border-blue-500  '>Hoodies</li></a></Link>
          <Link href="/stickers"><a ><li className='hover:border-b-2 hover:border-blue-500  '>Stickers</li></a></Link>
        </ul>
      </div>

      <div className='absolute right-0'>
        <AiOutlineShoppingCart className="mr-4 text-3xl" />
      </div>
    </div>
  )
}

export default Navbar
