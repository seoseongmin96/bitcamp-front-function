import axios, { AxiosResponse } from "axios";
import { json } from "stream/consumers";

const headers = {
    "Content-Type" : "application/json",
    Authorization: "JWT fefege...",
  }
export const googleLoginApi = async ( handleCredentialResponse: {}, userInfo: any ) => {
    try{
      console.log(`정보 1: ${JSON.stringify({handleCredentialResponse, userInfo})}`)
      console.log(`토큰 타입: `+ typeof(handleCredentialResponse))
      console.log(`정보 타입: `+ typeof(userInfo)) 

      userInfo.token= handleCredentialResponse
      console.log(JSON.stringify(userInfo))
      const response  = await axios.post ('http://127.0.0.1:8080/users/getToken', userInfo, {headers})
      console.log(`${JSON.stringify(response)}`)

    } catch(err){
      return err;
    }
  }