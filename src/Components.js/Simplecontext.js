import React, { createContext, useState } from 'react'
import Callaxios from './Callaxios'
export const Simplecontext= createContext()
export default function Simplecontextprovider({children}) {
    const [taskdata,settaskdata]=useState([])
    const gettasks=async()=>{
        let data =await Callaxios("get","url")
        console.log("datatask",data)
        // if (data.status===200){
        //     settaskdata(data.data)
        // }
    }
  return (
    <Simplecontextprovider value={{
        gettasks
    }}>{children}</Simplecontextprovider>
  )
}
