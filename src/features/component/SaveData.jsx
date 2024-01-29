import React from 'react'
import { useNavigate } from 'react-router-dom'

const SaveData = () => {
    const navigate = useNavigate()
  
    return (
    <>
    <button onClick={()=> {navigate('data-summary')}}>Save Data</button>
    </>
  )
}

export default SaveData