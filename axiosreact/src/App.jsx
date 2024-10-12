import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

  const API = "https://jsonplaceholder.typicode.com"

function App() {
  const [myData, setMyData] = useState([])
  const [isError, setIsError] = useState("")

// Note: using promises

  // useEffect( () => {
  //   axios.get("https://jsonplaceholder.typicode.com/posts")
  //   .then((res) => 
  //   setMyData(res.data)
  //   )
  //   .catch((error) => {
  //     setIsError(error.message)
  //   })
  // },[]);

  // note: using Async Await

  // const getApiData = async() => {
  //   try {
  //     const res = await axios.get("https://jsonplaceholder.typicode.com/posts") 
  //   setMyData(res.data)
  //   }
  //   catch(error) {
  //     setIsError(error.message)
  //   }
  // }

  // useEffect(() => {
  //   getApiData();
  // }, [])

  //note: you can pass url as argument also

  const getApiData = async(url) => {
    try {
      const res = await axios.get(url) 
    setMyData(res.data)
    }
    catch(error) {
      setIsError(error.message)
    }
  }

  useEffect(() => {
    getApiData(`${API}/posts`);
  }, [])

  return (
    <>
    <h1>Axios learn</h1>
    <div>
      {isError !== "" && <h2>{isError}</h2>}
    </div>
    {
      myData.map((post) => {
        const {id, title, body } = post;
        return <div className="card" key={id} >
          <h2>{title}</h2>
          <p>{body}</p>
        </div>
      })
    }
    </>
  )
}

export default App
