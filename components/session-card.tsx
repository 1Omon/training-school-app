import Image from 'next/image'
import React from 'react'

type TFacilitator = {
  image: string
  name: string
}

interface SessionCardProps {
  image: string
  title: string
  description: string
  facilitator: TFacilitator
}

const SessionCard = ({image, title, description, facilitator}: SessionCardProps) => {
  return (
    <div className='w-full p-2 bg-secondary border border-outline max-h-[250px] md:max-h-[350px]'>
      <Image src={image} alt='cover image' width={250} height={150} className='w-full h-[45%] bg-top object-cover rounded-md' />
      <h2 className="text-base md:text-xl font-semibold my-1">{title}</h2>
      <p className="my-1 text-sm md:text-base">{description}</p>

      <div className="flex items-center">
        <Image src={facilitator.image} alt='facilitator image' width={30} height={30} className='rounded-full w-7 h-7 object-cover mr-2'/>
        <span className='font-medium '>{facilitator.name}</span>
      </div>
    </div>
  )
}

export default SessionCard