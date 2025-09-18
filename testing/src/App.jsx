import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Course from './courses/course'
import Card from './card/card'


function App() {
let set = [
  {
    name: "HTML",
    cost: 2000,
    image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
    con: true
  },
  {
    name: "CSS",
    cost: 2000,
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
    con: true
  },
  {
    name: "JavaScript",
    cost: 2000,
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    con: true
  },
  {
    name: "Angular",
    cost: 2000,
    image: "https://angular.io/assets/images/logos/angular/angular.png",
    con: true
  },
  {
    name: "React",
    cost: 2000,
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    con: true
  },
  {
    name: "Java",
    cost: 2000,
    image: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
    con: true
  }
];


  const [count, setCount] = useState(0)

  return (
    <>
         
  <Card 
  name="HTML" 
  cost={1000} 
  image="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" 
  con={true} 
/>

<Card 
  name="CSS" 
  cost={1000} 
  image="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" 
  con={true} 
/>

<Card 
  name="JavaScript" 
  cost={1000} 
  image="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" 
  con={true} 
/>

<Card 
  name="Angular" 
  cost={1000} 
  image="https://angular.io/assets/images/logos/angular/angular.png" 
  con={true} 
/>

<Card 
  name="React" 
  cost={1000} 
  image="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" 
  con={true} 
/>
    </>
  );
}

export default App
