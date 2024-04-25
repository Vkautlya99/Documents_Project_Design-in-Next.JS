import React from 'react'
import { FiFileText } from "react-icons/fi";
import { TbWorldDownload } from "react-icons/tb";
import { IoCloseCircleSharp } from "react-icons/io5";
import { motion } from "framer-motion"


const Card = ({data,dragConstraints}) => {
  return (
      <motion.div drag dragConstraints={dragConstraints} whileDrag={{scale:1.1 }} className='relative flex-shrink-0 w-36 h-48 rounded-[40px] bg-gray-900/90 px-1 py-4 text-white overflow-hidden'>
          <FiFileText className='ml-2' />
          <p className='font-semibold text-sm leading-tight mt-4 ml-2'>{data.desc}</p>

          <div className="footer absolute bottom-0 w-full left-0">
              <div className='flex justify-between py-4 px-3'>
                  <h5 className='text-[14px] text-gray'>{data.fileSize}</h5>
                  <span className='w-6 h-5 rounded-full items-center flex justify-center'>
                      {data.close ? <IoCloseCircleSharp /> : <TbWorldDownload size=".9em" color="white" />}
                      
                  </span>
              </div>
              {
                  data.tag.isOpen &&
                      <div className='tag h-15 w-24px py-1 px-9 bg-green-600'>
                          <p className='font-sm items-center font-semibold'>Download</p>
                      </div>
                      
              }
              <div className={`tag h-15 w-24px py-2 px-9 ${data.tag.tagColor === 'blue' ? "bg-blue-600" : "bg-green-600"}`}>
                  <p className='font-sm items-center font-semibold'>{data.tag.tagTitle}</p>
              </div>
          </div>
          </motion.div>

  )
}

export default Card
