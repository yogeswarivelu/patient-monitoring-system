import React from "react";
import API from "../api";

function UpdatePatient({patient,refresh}){

const updateStatus = async()=>{

await API.put("/"+patient._id,{
status:"Discharged"
});

refresh();

};

return(

<button onClick={updateStatus}>
Discharge
</button>

);

}

export default UpdatePatient;