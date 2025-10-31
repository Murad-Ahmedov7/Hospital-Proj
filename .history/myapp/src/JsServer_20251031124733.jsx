import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function JsServer() {
  const [data, setData] = useState<any[]>([])

  useEffect(() => {
    axios.get('http://localhost:3031/users')
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      {data.map(d => (
        <div key={d.id}>
          <p>{d.id}</p>
          <p>{d.name}</p>
        </div>
      ))}
    </div>
  )
}
