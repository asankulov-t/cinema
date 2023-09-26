import axios from "axios";
let token='';
let postData=JSON.stringify({
    email: "broadmob$dwaysR4admin@gmail.com",
    password: "__2%W,,MPzkqCE8*"
})

export const APIREQUESTS={

    getToken:async ()=>{
        const instance = axios.create({
            baseURL: 'https://api.broadway.kg/api',
            headers: {
                Authorization:token.length===0?'':'Bearer '+token,
                'Access-Control-Allow-Origin':"*",
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
        })
        let res=await instance.post('/authenticate', postData)
        return res.data.token
    },

    getContent:async (token:string)=>{
        const instance = axios.create({
            baseURL: 'https://api.broadway.kg/api',
            headers: {
                Authorization:token.length===0?'':'Bearer '+token,
                'Access-Control-Allow-Origin':"*",
                'Accept':'application/json',
                'Content-Type':'application/json',
            },
        })
        console.log('token '+token)
        let today=new Date().toLocaleDateString('ro-Ro')
        let days=[today,today]
        let dates={
            dates:[days[0],days[1]]
        }
        let res= await instance.post('v1/getMovies',dates)
        return res.data.response
    },
}