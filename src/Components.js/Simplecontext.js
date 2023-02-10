import React, { createContext } from 'react'
export const Simplecontext= createContext()
export default function Simplecontextprovider({children}) {
  return (
    <Simplecontextprovider value={{

    }}>{children}</Simplecontextprovider>
  )
}
