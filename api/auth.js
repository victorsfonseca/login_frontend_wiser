import axios from 'axios'
// const axios = require('axios').default for typescript

const successApiURL = 'https://run.mocky.io/v3/da2adc8a-c2ec-4138-803f-ee719ea1a87e'
const wrongAuthApiURL =  'https://run.mocky.io/v3/31694979-8466-4d81-891c-94054dabd15e'

class Api{
    
    login(user, pass){
        const urlAPI = simulateApi(user,pass)
        return axios.post( urlAPI, {username: user, password: pass}).then( res => {
            let data = res.data
            if(!data.loggedIn) throw new Error(data.message)
            return data
        })
        .catch(error => {throw new Error(error.message)})

    }

    logout(){

    }
}

export default new Api()


// function to simulate api
function simulateApi(user, pass){
    if(user === 'user@mail.com' && pass === 'pass') return successApiURL
    return wrongAuthApiURL
}