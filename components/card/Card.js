import { cardContent } from '@/constants/card'
import React from "react";
import { CircularProgress, Tooltip } from '@nextui-org/react';
import Image from 'next/image';

export default function Card() {
    return(
      <section className='flex-row'>
        {cardContent.map((card)=> {
          return(
            <div className={`bg-[${card.background}] flex p-10 my-10 rounded-3xl`}>
              <div className='flex-1'>
                <p className='text-2xl'>{card.heading}</p>
                <p className='text-xs text-[#d5d5d5]'>{card.subheading}</p>
                <Tooltip color={card.color} content="You have sold ">
                  <p className='inline-block text-3xl'>{card.value}</p>
                </Tooltip>
              </div>
              <div className='flex items-center'>
                <CircularProgress
                  classNames={{
                    svg: "w-24 h-24 drop-shadow-md",
                    value: 'text-xl'
                  }}
                  value={card.percent}
                  color={card.color}
                  showValueLabel={true}
                />
              </div>
              <div>
                <Image 
                  src={card.arrow}
                  alt='arrow'
                  width={20}
                  height={20}
                />
              </div>
            </div>
          )
        })}
      </section>
    )
}
