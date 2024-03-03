"use client"
import { navLinks } from '@/constants'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Button } from '../ui/button'

const Sidebar = () => {
  const pathname=usePathname();
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image src="/assets/images/picc.png" alt='logo' width={80} height={18} />
          <span className="sidebar-text" style={{ fontWeight: 'bold' }}>ELIA3.0</span>
        </Link>
        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar_nav_elements">
              {navLinks.slice(0,6).map((link)=>{
                const isActive=link.route === pathname
                return(
                  <li key={link.route} className={`sidebar-nav_element group ${isActive ? 'bg-black text-white':'text-gray-400'}`}>
                    <Link className="sidebar-link" href={link.route}>
                      <Image src={link.icon} alt="logo" width={24} height={24} className={`${isActive && 'brightness-200'}`}/>
                      {link.label}
                    </Link>
                  </li>
                )
              }
              )}
              </ul>

              <ul className="sidebar-nav_elements">
              {navLinks.slice(6).map((link)=>{
                const isActive=link.route === pathname
                return(
                  <li key={link.route} className={`sidebar-nav_element group ${isActive ? 'bg-black text-white':'text-gray-400'}`}>
                    <Link className="sidebar-link" href={link.route}>
                      <Image src={link.icon} alt="logo" width={24} height={24} className={`${isActive && 'brightness-200'}`}/>
                      {link.label}
                    </Link>
                  </li>
                )
              }
              )}
              <li className="flex-center cursor-pointer gap-2 p-4">
                <UserButton afterSignOutUrl='/' showName/>
              </li>

            </ul>

          </SignedIn>
          

          <SignedOut>
            <Button asChild className="button bg-black bg-cover">
              <Link href="/sign-in">
              </Link>
            </Button>
          </SignedOut>

        </nav>

      </div>
    </aside>
  )
}

export default Sidebar