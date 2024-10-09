import React, { useRef } from 'react'
import Card from './Card'


const Foreground = () => {
  const ref = useRef(null);
  const data =[{
    desc: "morty smiths progress report upto 1976",
    filestore : ".9mb",
    close : false,
    tag : {
      isOpen: true,
      tagTitle : "Download Now",
      tagColor : "red",
    },
  },
  {
    desc: "Rick Sanchez portal Gun's Stats.xp ",
    filestore : ".10mb",
    close : false,
    tag : {
      isOpen: true,
      tagTitle : "Download Now",
      tagColor : "blue",
    },
  },
  {
    desc: "Harry osborn is the next green GOblin",
    filestore : ".10mb",
    close : false,
    tag : {
      isOpen: false,
      tagTitle : "Download Now",
      tagColor : "blue",
    },
  },


  ]
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 p-5 flex-wrap'>
      {
        data.map((item,index)=>(
          <Card data={item} reference ={ref}/>
        ))
      }
    </div>
  )
}

export default Foreground