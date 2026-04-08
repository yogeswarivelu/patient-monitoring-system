import React,{useState} from "react";
import API from "../api";

function AddPatient(){

const [name,setName]=useState("");
const [age,setAge]=useState("");
const [disease,setDisease]=useState("");

const handleSubmit = async()=>{

await API.post("/add",{
name,
age,
disease
});

window.location.reload();

}

return(

<div>

<h2>Add Patient</h2>

<input
placeholder="Name"
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="Age"
onChange={(e)=>setAge(e.target.value)}
/>

<input
placeholder="Disease"
onChange={(e)=>setDisease(e.target.value)}
/>

<button onClick={handleSubmit}>
Add Patient
</button>

</div>

);

}

export default AddPatient;