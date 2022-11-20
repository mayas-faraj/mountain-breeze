const express = require("express");
const router = express.Router();

router.get('/' , (req,res)=>{
    res.send({data : "Data retrieve"});
});

router.post('/' , (req,res)=>{
    res.send({data : "Data created"});
});

router.put('/' , (req,res)=>{
    res.send({data : "Data updated"});
});

router.delete('/' , (req,res)=>{
    res.send({data : "Data deleted"});
});

module.exports = router;


