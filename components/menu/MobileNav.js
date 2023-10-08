"use client"

import React from 'react'
import Image from 'next/image'
import { bottomBar } from '@/constants/menu'
import { usePathname, useRouter } from 'next/navigation';
import Link from 'next/link';

export default function MobileNav() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <section className="fixed w-screen bottom-0 bg-white pt-2">
      <div className='flex'>
        {bottomBar.map((button) => {
          const isActive = (pathname.includes(button.route) && button.route.length > 1) || pathname === button.route;
          return (
            <div className='flex-1 flex flex-col items-center justify-center'>
              <Link 
                href={button.route}
                key={button.label}
              >
                <Image alt={`${button.icon}`} src={`${isActive ? `/${button.green_icon}.svg` : `/${button.icon}.svg`}`} className={`${isActive ? '' : 'mb-6'}`} width={30} height={30} />
                <p className={`${isActive ? '' : 'hidden'} text-xl text-center text-[#95e45b]`}>{button.label}</p>
              </Link>
            </div>
          )
        })}
      </div>

    </section>
  )
}
