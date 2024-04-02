import React from 'react'

const trendingData = ["#Halving","#Tether","#Ethena","#Layer3","#Launchpool"]

const TrendingSection = () => {
  return (
    <div className='w-full my-5 ml-3 mr-5 flex flex-col gap-5'>
      <div className='pt-[16px] pr-[20px] pb-[12px] pl-[20px] rounded-[16px]' style={{    boxShadow: "rgba(88, 102, 126, 0.08) 0px 4px 24px, rgba(88, 102, 126, 0.12) 0px 1px 2px"}}>
        <div className='text-[1.3rem] font-[700] mb-2'>TRENDING TOPICS</div>
        {trendingData.map((data,index) => {
          return(
            <>
              <div className='mb-1 '>{index+1}  <span className='ml-2 font-[500]'>{data}</span></div>

            </>
          )
        })}
      </div>

      <div className='pt-[16px] pr-[20px] pb-[12px] pl-[20px] rounded-[16px]' style={{    boxShadow: "rgba(88, 102, 126, 0.08) 0px 4px 24px, rgba(88, 102, 126, 0.12) 0px 1px 2px"}}>
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
  )
}

export default TrendingSection