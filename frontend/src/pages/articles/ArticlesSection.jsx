import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { CryptoNewsContext } from '../../context/NewsContext'
import ArticlesCard from './ArticlesCard';

const ArticlesSection = () => {

 const {news} = useContext(CryptoNewsContext);

  

 

  return (
    <>
    <h1 class="mb-4 text-5xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
        <span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Articles
        </span>
      </h1>
    
    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
       
    {news.map((data,index) => (
        
        <a href={data.url} className='text-decoration-none color-inherit' >
        <ArticlesCard articles = {data}/>
        </a>
        
      ))}
      </div>
     

    </>
  )
}

export default ArticlesSection