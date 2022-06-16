const express = require('express')
const router = new express.Router()
const auth = require('../middleware/auth')
const Soumissionnaire = require('../models/Soumissionnaire')
const Admin = require('../models/Admin')
const InscVal = require('../models/InscVal')
const InscEnr = require('../models/InscEnr')
const multer = require('multer')
const produceManel = require('../publisherManel')
const fs = require('fs')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        fs.mkdir('./uploads/',(err)=>{
        cb(null, './uploads/')
        })
    },
    filename: function (req, file, cb) {
        cb(null, new Date().toISOString().replace(/:/g, '-') + file.originalname)
    },
})

const fileFilter = function (req, file, cb) {
    if (!file.originalname.match(/\.(pdf)/)) {
        return cb(new Error('File must be in pdf format!'))
    }

    cb(undefined, true)
}

const upload = multer({storage: storage, fileFilter: fileFilter})

router.post('/ms-auth/inscriptions', auth(Soumissionnaire), upload.array('documents[]', 10), async (req, res) => {
    //hadhi
    const files = req.files
    const filesPath = []
    files.forEach(file => {
        filesPath.push(file.path)
    })
    if(!filesPath) {
        return res.status(400).send()
    }
    const inscription = new InscVal({
        nom: req.body.nom,
        type: req.body.type,
        numRegistre: req.body.numRegistre,
        classification: req.body.classification,
        codes: req.body.codes,
        nif: req.body.nif,
        nis: req.body.nis,
        casnos: req.body.casnos,
        cacopath: req.body.cacopath,
        documents: filesPath,
        owner: req.body.owner
    })

    try {
        produceManel({message: inscription, propertie : "post"})
        await inscription.save()
        res.status(201).send(inscription)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/ms-auth/inscriptions/saved'/*, auth(Soumissionnaire)*/, upload.array('documents[]', 10), async (req, res) => {
    const files = req.files
    const filesPath = []
    if(files !== undefined) {
        files.forEach(file => {
            filesPath.push(file.path)
        })
        if(!filesPath) {
            return res.status(400).send()
        }
    }
    const inscription = new InscEnr({
        nom: req.body.nom,
        type: req.body.type,
        numRegistre: req.body.numRegistre,
        classification: req.body.classification,
        codes: req.body.codes,
        nif: req.body.nif,
        nis: req.body.nis,
        casnos: req.body.casnos,
        cacopath: req.body.cacopath,
        documents: filesPath,
        owner: req.body.owner
    })

    try {
        await inscription.save()
        res.status(201).send(inscription)
    } catch (e) {
        res.status(400).send(e)
    }
})

//get inscription by id
router.get('/ms-auth/inscription/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const inscription = await InscVal.findOne({_id}).populate({ path: 'owner', model: 'Soumissionnaire'})
        if (!inscription) {
            return res.status(404).send()
        }
        res.send(inscription)
    }catch (e) {
        res.status(500).send()
    }
})

router.get('/ms-auth/inscription/saved/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const inscription = await InscEnr.findOne({_id}).populate({ path: 'owner', model: 'Soumissionnaire'})
        if (!inscription) {
            return res.status(404).send()
        }
        res.send(inscription)
    }catch (e) {
        res.status(500).send()
    }
})

router.get('/ms-auth/inscriptions', async (req, res) => {
    try {
        const inscriptions = await InscVal.find({}).populate({ path: 'owner', model: 'Soumissionnaire'})
        if (!inscriptions) {
            return res.status(404).send()
        }
        res.send(inscriptions)
    }catch (e) {
        res.status(500).send()
    }
})

router.get('/ms-auth/inscriptions/saved', async (req, res) => {
    try {
        const inscriptions = await InscEnr.find({}).populate({ path: 'owner', model: 'Soumissionnaire'})
        if (!inscriptions) {
            return res.status(404).send()
        }
        res.send(inscriptions)
    }catch (e) {
        console.log(e)
        res.status(500).send()
    }
})


router.get('/ms-auth/inscriptions/owner/:id', async (req, res) => {
    const owner = req.params.id
    try {
        const inscription = await InscVal.findOne({owner}).populate({ path: 'owner', model: 'Soumissionnaire'})
        if (!inscription) {
            return res.status(404).send()
        }
        res.send(inscription)
    }catch (e) {
        res.status(500).send()
    }
})

router.get('/ms-auth/inscriptions/saved/owner/:id', async (req, res) => {
    const owner = req.params.id
    try {
        const inscription = await InscEnr.findOne({owner}).populate({ path: 'owner', model: 'Soumissionnaire'})
        if (!inscription) {
            return res.status(404).send()
        }
        res.send(inscription)
    }catch (e) {
        res.status(500).send()
    }
})

router.delete('/ms-auth/inscriptions/:id', auth(Soumissionnaire), async (req, res) => {
    //hadhi
    const _id = req.params.id
    try {
        const inscription = await InscVal.findOneAndDelete({_id})
        produceManel({message: _id, propertie : "delete"})
        if (!inscription) {
            return res.status(404).send()
        }
        res.send(inscription)
    } catch (e) {
        res.status(500).send()
    }
})

router.delete('/ms-auth/inscriptions/saved/:id', auth(Soumissionnaire), async (req, res) => {
    const _id = req.params.id
    try {
        const inscription = await InscEnr.findOneAndDelete({_id})
        if (!inscription) {
            return res.status(404).send()
        }
        res.send(inscription)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/ms-auth/admin/inscriptions/:id', auth(Admin), async (req,res) => {
    //hadhi
    const _id = req.params.id
    const updates = Object.keys(req.body)
    const allowedUpdates = ['numRegistre', 'classification', 'codes', 'nif', 'nis', 'casnos', 'cacopath','valide']
    const isValidOperation =updates.every((update) => allowedUpdates.includes(update))
    

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const inscription = await InscVal.findOne({_id})
        updates.forEach((update) => {
            if(update == "valide" ){
                inscription[update] = req.body[update]
            }else{
                inscription[update].valid = req.body[update].valid
                !req.body[update].notification ? inscription[update].notification = req.body[update].notification : null
            }

        })
        await inscription.save()
        produceManel({message: inscription, propertie : "patchAdmin"})
        res.send(inscription)
    } catch (e) {
        res.status(400).send(e)
    }
});

router.patch('/ms-auth/inscriptions/:id', auth(Soumissionnaire), async (req,res) => {
    //hadhi
    const _id = req.params.id
    const updates = Object.keys(req.body)
    const allowedUpdates1 = ['nom', 'type', 'documents']
    const allowedUpdates2 = [ 'numRegistre', 'classification', 'codes', 'nif', 'nis', 'casnos', 'cacopath']
    const isValidOperation1 =updates.every((update) => allowedUpdates1.includes(update))
    const isValidOperation2 =updates.every((update) => allowedUpdates2.includes(update))
    

    if (!isValidOperation1 || !isValidOperation2) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const inscription = await InscVal.findOne({_id})
        updates.forEach((update) => {
            allowedUpdates1.includes(update) ? inscription[update] = req.body[update] : inscription[update].value = req.body[update].value
        })
        await inscription.save()
        produceManel({message: inscription, propertie : "patchSoum"})
        res.send(inscription)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.patch('/ms-auth/inscriptions/saved/:id', auth(Soumissionnaire), async (req,res) => {
    const _id = req.params.id
    const updates = Object.keys(req.body)
    const allowedUpdates1 = ['nom', 'type', 'documents']
    const allowedUpdates2 = [ 'numRegistre', 'classification', 'codes', 'nif', 'nis', 'casnos', 'cacopath']
    const isValidOperation1 =updates.every((update) => allowedUpdates1.includes(update))
    const isValidOperation2 =updates.every((update) => allowedUpdates2.includes(update))
    

    if (!isValidOperation1 || !isValidOperation2) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const inscription = await InscEnr.findOne({_id})
        updates.forEach((update) => {
            allowedUpdates1.includes(update) ? inscription[update] = req.body[update] : inscription[update].value = req.body[update].value
        })
        await inscription.save()

        res.send(inscription)
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router