import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import data from '../data'

export default function Home() {

  const [fdata, setFdata] = useState();

  useEffect(() => {
    getData();
  },[])

  const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/')
    .then( (res) => res.json() );
    setFdata(res);
  }

  // const cards = data.map(item => {

  //   return (
  //     <Card 
  //     img= {item.img}
  //     rating={item.rating}
  //     stats={item.stats}
  //     name={item.name}
  //     />
  //   )
  // })

  // return (
  //   <>
  //   <Navbar />
  //   <div className='card-box'>
  //     {cards}
  //   </div>
  //   </>
  // )

    return(
      <div >
        <Navbar />
        {fdata && fdata.map( (item) => (
          <div key={item.id}>
            <Card name={item.title} />
            </div>
        ))}
      </div>
    )
}
