import React from 'react'
import { PulseLoader } from "react-spinners";

export default function loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
        <PulseLoader color='#42b469' />
    </div>
  )
}

