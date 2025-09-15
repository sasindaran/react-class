// !import React from 'react'

export default function List() {

    const num=["one","two","three"]
    const listItems=num.map((no,ind)=>{
        return <li key={ind}>{no}</li>
    });
    return (
        <ul>{listItems}
        </ul>
  )
}
