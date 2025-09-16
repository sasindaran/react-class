// !import React from 'react'

export default function List() {

   const fruits=[{id: 1,name:"Apple",calories:90},
                 {id: 2,name:"Orange",calories:80},
                 {id: 3,name:"Banana",calories:50},
                 {id: 4,name:"Cocount",calories:43},
                 {id: 5,name:"Pineapple",calories:25},
   ]

   //If number use subtract symbol
   //fruits.sort((a,b)=>{return a.name-b.name})
   fruits.sort((a,b)=>a.name.localeCompare(b.name))

   const listItem=fruits.map(fruits=> <li key={fruits.id}>{fruits.name}:&nbsp;<b>{fruits.calories}</b></li>);

   return(
    <ol>{listItem}</ol>
   )
}
