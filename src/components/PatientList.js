import React,{useEffect,useState} from "react";
import API from "../api";
import UpdatePatient from "./UpdatePatient";

function PatientList(){

const [patients,setPatients] = useState([]);

useEffect(()=>{

fetchPatients();

},[]);

const fetchPatients = async()=>{

const res = await API.get("/");
setPatients(res.data);

};

const deletePatient = async(id)=>{

await API.delete("/"+id);
fetchPatients();

};

return(

<div>

<h2>Patient List</h2>

{patients.map((p)=>(

<div key={p._id}>

<p>
{p.name} | Age: {p.age} | Disease: {p.disease} | Status: {p.status}
</p>

<UpdatePatient patient={p} refresh={fetchPatients}/>

<button onClick={()=>deletePatient(p._id)}>
Delete
</button>

</div>

))}

</div>

);

}

export default PatientList; 