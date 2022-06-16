const express = require('express')
const router = new express.Router()
const Annotation = require("../models/Annotation")

//create
router.post('/ms-annotation/annotations', async (req, res) => {
    const annotation = new Annotation({
        ...req.body
    })

    try {
        await annotation.save()
        res.status(201).send(annotation)
    } catch (e) {
        res.status(400).send(e)
        console.log(e)
    }
})
//get_all
router.get('/ms-annotation/annotations', async (req, res) => {
    try {
        const annotations = await Annotation.find({})
        if(!annotations) {
            throw new Error()
        }
        res.send(annotations)
    } catch (e) {
        res.status(404).send()
    }
})
//get_state
router.get('/ms-annotation/annotations/state/:state', async (req, res) => {
    const state = req.params.state
    try {
        const annotations = await Annotation.find({state})
        if(!annotations) {
            throw new Error()
        }
        res.send(annotations)
    } catch (e) {
        res.status(404).send()
    }
})
//get_by_id
router.get('/ms-annotation/annotations/:id', async (req, res) => {
    try {
        const annotation = await Annotation.findById(req.params.id)
        
        if(!annotation) {
            throw new Error()
        }
        res.send(annotation)
    } catch (e) {
        res.status(404).send()
    }
})
//get_id_soumission
router.get('/ms-annotation/annotations/soumission/:id', async (req, res) => {
    const soumission = req.params.id
    try {
        const annotation = await Annotation.find(soumission)
        
        if(!annotation) {
            throw new Error()
        }
        res.send(annotation)
    } catch (e) {
        res.status(404).send()
    }
})
//get_id_offre
router.get('/ms-annotation/annotations/offre/:id', async (req, res) => {
    const offre = req.params.id
    try {
        const annotation = await Annotation.find(offre)
        
        if(!annotation) {
            throw new Error()
        }
        res.send(annotation)
    } catch (e) {
        res.status(404).send()
    }
})
//get_id_lot
router.get('/ms-annotation/annotations/lot/:id', async (req, res) => {
    const lot = req.params.id
    try {
        const annotation = await Annotation.find(lot)
        
        if(!annotation) {
            throw new Error()
        }
        res.send(annotation)
    } catch (e) {
        res.status(404).send()
    }
})
//update_gestionnaire
router.patch('/ms-annotation/annotation/gestionnaire/:id', async (req,res) => {
    const _id = req.params.id
    const updates = Object.keys(req.body)
    const allowedUpdates = ['classification', 'nb_materiel', 'nb_salaries', 'prix']
    const isValidOperation =updates.every((update) => allowedUpdates.includes(update))
    

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const annotation = await Annotation.findOne({_id})
        updates.forEach((update) => {
            annotation[update]= req.body[update]
            !req.body[update] ? annotation[update] = req.body[update] : null
        })
        await annotation.save()

        res.send(annotation)
    } catch (e) {
        res.status(400).send(e)
    }
});
//update_evaluateur
router.patch('/ms-annotation/annotation/evaluateur/:id', async (req,res) => {
    const _id = req.params.id
    if (!req.body.qualite_tech) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }
    try {
        const annotation = await Annotation.findOne({_id})
        annotation.qualite_tech = req.body.qualite_tech
        await annotation.save()

        res.send(annotation)
    } catch (e) {
        res.status(400).send(e)
    }
});

module.exports = router