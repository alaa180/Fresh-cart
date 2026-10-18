'use server'

import { UserData } from "@/src/app/(auth)/register/page"
import { cookies } from "next/headers"

 export async function userRegister(data:UserData){
      console.log(data)

      try {
        const response = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signup',{
            method:'POST',
            body: JSON.stringify(data),
            headers:{
                "content-type":"application/json"
            }

        })

        const payload = await response.json()

        console.log("payload",payload)

        return response.ok
        

      } catch (error) {
        console.log(error)
      }
    }


    
// export async function userLogin(data:UserData){
      // console.log(data)

      // try {
       
      //   if(response.ok){
      //     const cookie = await cookies()
      //     cookie.set('userToken', payload.token, {
      //       httpOnly:true
      //     })
      //   }
      //   return response.ok
      // } catch (error) {
      //   console.log(error)
      // }
    