const res = require('express/lib/response')
const NodeModel = require('../models/nodes.models');

const Remplir = async (req, res)=>{
    await NodeModel.create(req.body)
    res.status(200).json({message:"success"})
}
const getNodes = async(req, res)=>{
    const nodes = await NodeModel.find({puissancereçue:{$lte:-34 , $gte:-36},teb:1e-9})
     res.status(200).json(nodes)
}
const getNodesMediocre = async(req, res)=>{
    const nodes = await NodeModel.find().or([{puissancereçue: {$lt:-36 , $gt:-50}},{teb: {$gt:1e-9 , $lt:1e-6}}])
     res.status(200).json(nodes)
}
const getNodesCoupure = async(req, res)=>{
    const nodes = await NodeModel.find().or([{puissancereçue: {$lte:-50}},{teb: {$gte:1e-6,$lte:1e-3}}])
     res.status(200).json(nodes)
}
module.exports ={
    Remplir,
    getNodes,
    getNodesMediocre,
    getNodesCoupure

}