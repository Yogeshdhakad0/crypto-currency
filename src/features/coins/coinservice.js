import axios from "axios"

const trendingcoin= async()=>{
    const response=await axios.get('https://api.coingecko.com/api/v3/search/trending')
     return response.data.coins
}

const  serachcoin= async(query)=>{
    const response=await axios.get(`https://api.coingecko.com/api/v3/search?query=${query}`)
     return response.data.coins
}

const  coindetalis= async(id)=>{
    const response=await axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
     return response.data
}


const  services={trendingcoin,serachcoin,coindetalis}
 export default  services