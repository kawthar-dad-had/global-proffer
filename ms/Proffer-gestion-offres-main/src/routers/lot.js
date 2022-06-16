const express = require('express')
const router = express.Router()
const Lot = require('../models/lot')
const Offer = require('../models/offer')
const producemanel = require('../publishermanel')
const multer = require('multer')

const upload = multer({
    limits: {
        fileSize: 5000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(pdf)$/)) {
            return cb(new Error('Please upload a pdf'))
        }
        cb(undefined, true)

    }
})

router.post('/ms-offre/offers/lots/add', upload.single('cahierdescharges'), async (req,res) =>{
    //const lot =  new Lot(req.body)
    const lot = new Lot({
        ...req.body,
        cahierDesCharges : req.file.buffer
    })
    
    try{
        await lot.save()
        producemanel({message: lot, propertie: "postlot"})
        res.status(201).send(lot)
    } catch(e) {
        res.status(400).send(e)
    }
}, (error, req, res, next) => {
    res.status(400).send({error: error.message})
} )

//GET /lots?limit=10&skip=20
//GET /lots?sortBy=createdAt_asc
router.get('/ms-offre/offers/:id/lots',  async (req,res) => {
    const sort = {}

    if(req.query.sortBy) {
        const parts = req.query.sortBy.split('_')
        sort[parts[0]] = parts[1] === 'desc' ? -1 : 1
    }
    const offer = await Offer.findOne({_id : req.params.id, owner: req.admin._id})
    try{
        //const lots = await Lot.find({})
        await offer.populate({
            path: 'lots',
            options: {
                limit : parseInt(req.query.limit),
                skip: parseInt(req.query.skip),
                sort
            }
        }).execPopulate()
        
        

        res.send(offer.lots)
    } catch(e) {
        res.status(500).send()
    }
})

router.get('/ms-offre/offers/lots/:id',  async (req,res) =>{
    const _id = req.params.id
    try{
        // const lot = await Lot.findById(req.params.id)

        // const offer = await Offer.findOne({_id : req.params.ido, owner: req.admin._id})
        // if(!offer) {
        //     return res.status(404).send()
        // }

        const lot = await Lot.findById(_id)
        if(!lot) {
            return res.status(404).send()
        }

        res.send(lot)
    } catch(e) {
        res.status(500).send()
    }
})

router.delete('/ms-offre/offers/lots/delete/cahierdescharges/:id', upload.single('cahierdescharges'), async (req,res) =>{
    try {

        // const offer = await Offer.findOne({_id : req.params.ido, owner: req.admin._id})
        // if(!offer) {
        //     return res.status(404).send()
        // }

        const lot = await Lot.findOne({_id :req.params.id})
        if (!lot){
            return res.status(404).send()
        }
        lot.cahierDesCharges = undefined
        await lot.save()
        producemanel({message: req.params.id, propertie: "deletelot"})
        res.send()
    } catch (e) {
        res.status(500).send()
    }
    
})

router.get('/ms-offre/offers/lots/cahierdescharges/:id',   async (req,res) => {
    try {
        // const offer = await Offer.findOne({_id : req.params.ido, owner: req.admin._id})
        // if(!offer) {
        //     return res.status(404).send()
        // }

        const lot = await Lot.findOne({_id :req.params.id})
        //console.log(lot)
        if(!lot || !lot.cahierDesCharges){
            throw new Error()
        }
        res.set('Content-Type','application/pdf')
        res.send(lot.cahierDesCharges)
    } catch (e) {
        res.status(404).send()
    }
})



router.patch('/ms-offre/offers/lots/edit/:id', async(req,res) =>{
    updates = Object.keys(req.body)
    allowedUpdates = ['classification', 'nbMateriels', 'nbSalariés', 'dernierDelai', 'type', 'prixMin', 'prixMax']
    isValidUpdate = updates.every((update) => allowedUpdates.includes(update))
    if(!isValidUpdate) {
        res.status(400).send({error: 'unvalid update!'})
    }
    try {

        // const offer = await Offer.findOne({_id : req.params.ido, owner: req.admin._id})
        // if(!offer) {
        //     return res.status(404).send()
        // }

        const lot = await Lot.findById({ _id: req.params.id })
        if (!lot) {
            return res.status(404).send()
        }

        updates.forEach((update) => lot[update] = req.body[update]);
        await lot.save()
        producemanel({message: lot, propertie: "patchlot"})

        res.send(lot)

    } catch (e) {
        res.status(400).send()
        
    }
})

router.delete('/ms-offre/offers/:ido/lots/delete/:id',async(req,res) => {
    try {
        const offer = await Offer.findOne({_id : req.params.ido, owner: req.admin._id})
        if(!offer) {
            return res.status(404).send()
        }

        const lot = await Lot.findOneAndDelete({ _id: req.params.id, offer: req.params.ido })
        if(!lot) {
            return res.status(404).send()
        }
        return res.send(lot)

    } catch (error) {
        res.status(500).send()
    }
    
})

module.exports = router