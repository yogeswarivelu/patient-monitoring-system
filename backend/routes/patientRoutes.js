const express = require("express");
const router = express.Router();
const Patient = require("../models/Patient");

/* CREATE PATIENT */

router.post("/add", async (req,res)=>{

    const patient = new Patient(req.body);
    await patient.save();

    res.json(patient);

});


/* GET ALL PATIENTS */

router.get("/", async(req,res)=>{

    const patients = await Patient.find();
    res.json(patients);

});


/* UPDATE PATIENT */

router.put("/:id", async(req,res)=>{

    const updatedPatient = await Patient.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    );

    res.json(updatedPatient);

});


/* DELETE PATIENT */

router.delete("/:id", async(req,res)=>{

    await Patient.findByIdAndDelete(req.params.id);
    res.json({message:"Patient deleted"});

});

module.exports = router;