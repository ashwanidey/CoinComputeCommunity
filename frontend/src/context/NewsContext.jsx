import { createContext, useEffect, useState ,useLayoutEffect} from "react";
import axios from "axios"

export const CryptoNewsContext = createContext({});
const apiKey = '75acbbfe11msh9a549667cd39781p121f3ajsn1dc9cc6f1677';

export const CryptoNewsProvider = ({children}) => {

  const [news,setNews] = useState([]);

  const options = {
    method: 'GET',
    url: 'https://cryptocurrency-news2.p.rapidapi.com/v1/cointelegraph',
    headers: {
      'X-RapidAPI-Key': apiKey,
    'X-RapidAPI-Host': 'cryptocurrency-news2.p.rapidapi.com'
    }
  };

  const getNews = async () => {
    try {
      const response = await axios.request(options);
      return response.data.data;
    } catch (error) {
      console.error(error);
    }
  }

  

  useLayoutEffect(() => {
    const fetchData = async () => {
      let now = new Date().getTime();
      const oneDay = 1000 * 60 * 60 * 24;
  
      if (localStorage.color && localStorage.expireTime && parseInt(localStorage.expireTime) > now) {
        setNews(JSON.parse(localStorage.color));
        // console.log(`Returning user -- color from last visit is ${localStorage.color}`);
      } else {
        // Fetch news if not stored or expired
        let fetchedNews = await getNews();
        console.log(fetchedNews)
        if (fetchedNews.length > 0) {
          setNews(fetchedNews);
          
          let newExpireTime = now + oneDay;
  
          localStorage.setItem("color", JSON.stringify(fetchedNews));
          localStorage.setItem("expireTime", newExpireTime);
  
          let dateString = new Date(newExpireTime).toLocaleString();
          // console.log(`First visit (since storage was cleared). New color, ${newColor}, will be replaced at ${dateString}`);
        }
      }
    };
  
    fetchData();
  }, []);

    
 
  return(
    <CryptoNewsContext.Provider
    value={{
      news,
    }}
  >
    {children}
  </CryptoNewsContext.Provider>
  )
}