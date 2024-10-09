import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { IoClose } from 'react-icons/io5';
import { LuDownload } from 'react-icons/lu';
import { motion } from 'framer-motion';
const Card = ({data,reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale : 1.1}} dragElastic={1} dragTransition={{bounceStiffness: 200,bounceDamping : 30}} className='relative flex-shrink-0 w-60 h-72 rounded-[48px] text-white  bg-zinc-900/90 px-7 py-10 overflow-hidden'>
        <FaRegFileAlt/>
        <p className='text-sm mt-5 leading-tight font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full  left-0'>
            <div className='flex justify-between py-0 px-7 items-center mb-5'>
                <h4 className='font-semibold text-sm'>{data.filestore}</h4>
                <span className='w-6 h-6 bg-zinc-200 rounded-full flex items-center justify-center'>
                  {data.close ? <IoClose color='#000'/> :   <LuDownload size=".8em" color='#000'/>}</span>
                
            </div>
            {data.tag.isOpen && (
              <div className={`tag w-full py-4 ${data.tag.tagColor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
              <h3 className='text-sm font-semibold'>Download now</h3>
          </div>
            )}
        </div>
    </motion.div>
  );
}

export default Card