import React from 'react'
import { useNavigate } from 'react-router-dom'

const DataSummary = () => {
    const navigate = useNavigate()
  return (
    <div>
        <p>Data was successfully saved!!
        </p>
        <button onClick={()=> navigate(-1)}> 
        {/* <button onClick={()=> navigate('landing')}>  */}
            
            Go BACK
        </button>
        </div>
  )
}

export default DataSummary