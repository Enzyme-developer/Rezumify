import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Rings } from 'react-loader-spinner'

const Home = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const navigate = useNavigate()

    const loader = () => {
        setLoading(true)  
        setTimeout(() => {
            navigate('/templates')
            setLoading(false)
        }, 3000);
    }

    if (loading) return <Rings height="80" width="80"  color="#4fa94d" radius="6" wrapperStyle={{}} wrapperClass="" visible={true} ariaLabel="rings-loading" />   

  return (
    <div>
        <h1>Build your Resume In 3 Easy Steps</h1>

        <ul>
            <li>Select a template from our collection</li>
            <li>Fill in your details</li>
            <li>Download your resume in one click.</li>
        </ul>
        
        <button onClick={loader}>View Templates</button>
    </div>
  )
}

export default Home