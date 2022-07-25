import React, { useEffect, useState } from 'react'

export default function Listitem({ getItem }) {
    const [item, setItem] = useState([]);

    useEffect(() => {
        setItem(getItem(0))
    },
    [getItem])

  return (
    <>
      {
            item.map((i) => {
                return(
                    <p>{ i }</p>
                )
            })
        }
    
    </>
      
    
  )
}  
