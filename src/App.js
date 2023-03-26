import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
<ExternalUsers></ExternalUsers>
    </div>
  );
}

function ExternalUsers(){
    const [users, setUsers] = useState([]); 
    //useEffect(()=>{},[])
    useEffect(()=>{
  
       fetch('https://jsonplaceholder.typicode.com/users')
       .then(res=>res.json())
       .then(data =>setUsers (data))
       //setUser diye connect korc
  
    },[])
    return(
      <div>
        <h2>External users</h2>
        <p>{users.length}</p>
        {
          users.map(users => <User name={users.name} email={users.email}></User>)
        }
      </div>
    )
  
  } 

  function User (props){
    return(
      <div style={{border:'2px solid red',margin:'20px'}}>
        <h2>Name:{props.name}</h2>
        <p>Email:{props.email}</p>
      </div>
    )
  }


function Counter(){
  const [count, setCount] = useState(0);
  
  //evavew kora jay
  const increaseCount = () =>setCount(count +1); 
  const decreaseCount = () =>setCount(count -1); 
    
   //evavew kora jay
  //handeler jog korc ei jaygay
  // const increaseCount = () =>{
  //   const newCount =count +1;
  //   setCount(newCount); 
  // }
  return(
    <div>
      <h1>Count:{count}</h1>
      <button onClick={increaseCount}>increase</button>
      <button onClick={decreaseCount}>decrease</button>
    </div>
  )
}

export default App;
