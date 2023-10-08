"use client"

import Card from '@/components/card/Card';
import { UserButton, useUser } from '@clerk/nextjs'
import { dark } from '@clerk/themes';

export default function Home() {
    const { isSignedIn, user, isLoaded } = useUser();
    if (!isLoaded) {
        return null;
    }
    
    if (isSignedIn) {
        return( 
            <section className='max-sm:m-10'>
                <div>
                    <p className='max-sm:text-4xl prompt'>
                        Hello {user.firstName}
                    </p>
                    <p className='text-[#d5d5d5] max-sm:text-xl'>Welcome back</p>
                </div>
                <div>
                    <Card />
                </div>
            </section>
            );
    }
}