import React from 'react'
import { cardContent } from '@/constants/card'


export default function Modal({card, onClose}) {
    const handleClose = () => {
        // Perform any cleanup or other actions needed before closing
        // Then, call the onClose function to actually close the modal
        onClose();
      };
  return (
    <div>
        Modal {card}
        <button onClick={handleClose}>Close</button>
        </div>
  )
}
