import axios from "axios";
let token='';
let postData=JSON.stringify({
    email: "broadmob$dwaysR4admin@gmail.com",
    password: "__2%W,,MPzkqCE8*"
})

export const APIREQUESTS={

    getMovies(token, date) {
        return axios({
            url: `https://api.broadway.kg/api/v1/getMovies?dates=${date}`,
            method: "GET",
            headers: {
                'Authorization': "Bearer " + token,
                "Content-Type": "application/json"
            },
            data: {}
        }).then(res => res.data.response)
    },
    getToken(date) {
        let postData = JSON.stringify({
            email: "broadmob$dwaysR4admin@gmail.com",
            password: "__2%W,,MPzkqCE8*"
        })
        const config = {
            headers: {

                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }
        return axios.post('https://api.broadway.kg/api/authenticate', postData, config).then(res => res.data.token)
    },
}