import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Positions = () => {

    const [positions, setPositions] = useState([])

    useEffect(() => {
        axios.get(`http://20.231.125.173:5009/getPos`)
            .then( response  => {
                    console.log(response.data)
            })
            .catch(err => {
                console.log("fuck page positions",err)
            })

    },[])

  return (
    <div >Positions</div>
  )
}

export default Positions