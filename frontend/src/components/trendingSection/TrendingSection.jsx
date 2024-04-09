import React, { useContext } from 'react'
import { UserContext } from '../../context/UserContext'

const trendingData = ["#Halving","#Tether","#Ethena","#Layer3","#Launchpool"]

const TrendingSection = () => {
  const {darkMode} = useContext(UserContext)
  return (
    <div className=' w-full my-5 ml-3 mr-5 '>
      <div className='sticky top-5 flex flex-col gap-5'>
      <div className=' pt-[16px] pr-[20px] pb-[12px] pl-[20px] rounded-[16px] dark:bg-[#323546] dark:text-white' style={darkMode ? {boxShadow: "0px 8px 32px 0px #0D1421, 0px 1px 2px 0px #0D1421"} : {boxShadow : "0px 8px 32px 0px rgba(128,138,157,0.24),0px 1px 2px 0px rgba(128,138,157,0.12)"}}>
        <div className='text-[1.3rem] font-[700] mb-2'>TRENDING TOPICS</div>
        {trendingData.map((data,index) => {
          return(
            <>
              <div className='mb-1 '>{index+1}  <span className='ml-2 font-[500]'>{data}</span></div>

            </>
          )
        })}
      </div>

      <div className='pt-[16px] pr-[20px] pb-[12px] pl-[20px] rounded-[16px] dark:bg-[#323546] dark:text-white' style={darkMode ? {boxShadow: "0px 8px 32px 0px #0D1421, 0px 1px 2px 0px #0D1421"} : {boxShadow : "0px 8px 32px 0px rgba(128,138,157,0.24),0px 1px 2px 0px rgba(128,138,157,0.12)"}}>
        <div className='text-[1.3rem] font-[700] mb-2 whitespace-nowrap'>RECOMMENDED ACCOUNTS</div>
        {trendingData.map((data,index) => {
          return(
            <>
              <div className='mb-1 '>{index+1}  <span className='ml-2 font-[500]'>{data}</span></div>

            </>
          )
        })}
      </div>
      

      <div className='pt-[16px] pr-[20px] pb-[12px] pl-[20px] rounded-[16px] dark:bg-[#323546] dark:text-white' style={darkMode ? {boxShadow: "0px 8px 32px 0px #0D1421, 0px 1px 2px 0px #0D1421"} : {boxShadow : "0px 8px 32px 0px rgba(128,138,157,0.24),0px 1px 2px 0px rgba(128,138,157,0.12)"}}>
        <div className='text-[1.3rem] font-[700] mb-2 whitespace-nowrap'>RECOMMENDED ACCOUNTS</div>
        {trendingData.map((data,index) => {
          return(
            <>
              <div className='mb-1 '>{index+1}  <span className='ml-2 font-[500]'>{data}</span></div>

            </>
          )
        })}
      </div>

      <div className='pt-[16px] pr-[20px] pb-[12px] pl-[20px] rounded-[16px] dark:bg-[#323546] dark:text-white' style={darkMode ? {boxShadow: "0px 8px 32px 0px #0D1421, 0px 1px 2px 0px #0D1421"} : {boxShadow : "0px 8px 32px 0px rgba(128,138,157,0.24),0px 1px 2px 0px rgba(128,138,157,0.12)"}}>
        <div className='text-[1.3rem] font-[700] mb-2 whitespace-nowrap'>RECOMMENDED ACCOUNTS</div>
        {trendingData.map((data,index) => {
          return(
            <>
              <div className='mb-1 '>{index+1}  <span className='ml-2 font-[500]'>{data}</span></div>

            </>
          )
        })}
      </div>
      </div>
    </div>
  )
}

export default TrendingSection