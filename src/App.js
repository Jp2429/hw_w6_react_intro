import React from 'react';    // 1️⃣
import './App.css';           // 2️⃣

function App() {              // 3️⃣
  // we can write JS here :)  // 4️⃣
  let name="John"
  let age=20
  let numArray=[,10,15,20,25]

  //Testing out react here
  const calculateTotal = function (numArray) {
    const total=numArray.reduce((runningTotal,num)=>{
      return runningTotal+num
    },0)
    return total
  };
  const answer=calculateTotal(numArray)


  return (                    // 5️⃣
    //  <h1>Hello World!</h1>     // 6️⃣
    <div>
  		<h1 className="title">Hello World!</h1>
  		<p> My name is {name} and I'm {age} years old</p>
      <p>The sum of the array is: {answer}</p>
  	</div>
      
  );                          // 7️⃣
}                             // 8️⃣

export default App;
