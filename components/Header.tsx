"use client"
import { Bookmark, Menu, Search, X } from 'lucide-react';
// import Link from 'next/link'
import React, { useState } from 'react'
import logo from "@/public/mcps_logo.jpeg"
import Image from 'next/image';
import Link from 'next/link';


const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-black text-white z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        
        <Link href="/" className="flex items-center justify-center text-xl gap-3 font-bold">
          <Image src={logo} alt='MCPS logo' width={40} height={40} />
          MCPS
        </Link>

        
        <nav className="hidden md:flex space-x-6 ">
          <Link href="/" className=" hover:text-yellow-400 transition-colors">EXPLORE</Link>
          <Link href="/" className="hover:text-yellow-400 transition-colors">ABOUT</Link>
          <Link href="/" className="hover:text-yellow-400 transition-colors">CAREERS</Link>
          <Link href="/" className="hover:text-yellow-400 transition-colors">CONTACT</Link>
          <Link href="/" className="hover:text-yellow-400 transition-colors">HOW TO JOIN</Link>
        </nav>

        <div className='flex items-center gap-4'>
          {/* Icons */}
          <div className="flex items-center space-x-4">
            <Bookmark className="w-6 h-6 hover:text-yellow-400 cursor-pointer transition-colors" />
            <Search className="w-6 h-6 hover:text-yellow-400 cursor-pointer transition-colors" />
          </div>

          {/* Buttons - Hidden on mobile */}
          <div className='hidden md:flex gap-2'>
            <button className="px-4 py-2 rounded hover:bg-opacity-80 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all">
              Join Now
            </button>
            <button className="px-4 py-2 rounded hover:bg-opacity-80 bg-yellow-400 text-black hover:bg-yellow-500 transition-all">
              Apply Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>
        </header>
  )
}

export default Header