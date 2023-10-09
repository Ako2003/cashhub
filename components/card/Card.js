import { CircularProgress, Tooltip } from '@nextui-org/react';
import { cardContent } from '@/constants/card'
import { motion } from "framer-motion";
import Image from 'next/image';
import React, { useState } from "react";
import Modal from './Modal';


export default function Card() {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

        {/* Render the modal for the selected card */}
        return(
          <section className='flex-row'>
            {selectedCardIndex !== null && (
              <Modal
                card={cardContent[selectedCardIndex].heading}
                onClose={() => setSelectedCardIndex(null)}
              />
            )}
        {cardContent.map((card, index)=> {
          return(
            <div 
            key={index}
            className={`flex p-10 my-10 rounded-3xl`}
            style={{
              backgroundColor: card.background,
            }}
            >
              <div className='flex-1'>
                <p className='text-2xl'>{card.heading}</p>
                <p className='text-xs text-[#d5d5d5]'>{card.subheading}</p>
                <Tooltip color={card.color} content="You have sold ">
                  <p className='inline-block text-3xl'>{card.value}</p>
                </Tooltip>
              </div>
              <motion.div 
              whileHover={{ scale: 1.4 }}
              className='flex items-center cursor-pointer'
              onClick={() => setSelectedCardIndex(index)}
              >
                <CircularProgress
                  classNames={{
                    svg: "w-24 h-24 drop-shadow-md",
                    value: 'text-xl'
                  }}
                  value={card.percent}
                  color={card.color}
                  showValueLabel={true}
                />
              </motion.div>
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
