import React, {useState} from 'react';
import './App.css';
import {useForm} from 'react-hook-form';
import axios from 'axios';
function App() {

  const [state, setstate] = useState({data:'',message:''})
  const {register, handleSubmit} = useForm();
  let names = [];



  const onSubmit = (data)=>{
    var passedObject = {"userName":data.userName,"cardNUmber":parseInt(data.cardNumber),"cvv":parseInt(data.cvv),"pin":parseInt(data.pin),"amount":parseInt(data.amount),"denomination":data.denomination}
    axios.post('https://basic-atm-api-gagan.herokuapp.com/',passedObject)
    .then(res=>{
      setstate((prevState)=> { 
        return {message:res.data.message,data:res.data.data}})
    })
    .catch(err=>{
      console.log(err)
    })
  }
  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)}>
    <h1>ATM MACHINE BY GAGAN</h1>
    <p>demo user: gagan, CN: 999999999999, CVV: 123, PIN: 1234</p>
    <input type="text" placeholder="Card Holder Name....." name="userName" ref={register}/><br/>
    <input type="text" placeholder="Card Number....." name="cardNumber" ref={register}/><br/>
    <input type="password" placeholder="CVV...." name="cvv" ref={register}/><br/>
    <input type="password" placeholder="4-digit PIN...." name="pin" ref={register}/><br/>
    <input type="text" placeholder="Enter Amount...." name="amount" ref={register}/><br/>
    <h3>Choose preferred denomination :</h3>
    <select name="denomination" ref={register} defaultValue="None">
      <option value="10">Rs.10</option>
      <option value="20">Rs.20</option>
      <option value="50">Rs.50</option>
      <option value="100">Rs.100</option>
      <option value="200">Rs.200</option>
      <option value="500">Rs.500</option>
      <option value="1000">Rs.1000</option>
      <option value="None">None</option>
    </select><br/>
    <input type="submit"/>  
    <h4>Wait 10-15 sec for response<br/>{state.message}</h4>
    {Object.keys(state.data).forEach(key => {
          names.push([key,state.data[key]]) // key - value
        })}


     {
     names.map(name => (
        <li key={name[0]}>
          Rs.{name[0]} x {name[1]}
        </li>
      ))}
    </form>
    </>
  );
}

export default App;
