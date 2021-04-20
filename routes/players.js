const express = require('express');
const router  = express.Router();

const Player = require('../models/Player')

/* GET all players */
router.get('/', (req, res, next) => {
  Player.find({}, {createdAt: 0, updatedAt: 0})
  .then((result)=>{
    res.status(200).send(result)
  })
  .catch((err)=>{
    res.status(400).send(err)
  })
});

/* GET player details */
router.get('/:_id', (req, res, next) => {
  Player.findById(req.params._id)
  .then((result)=>{
    res.status(200).send(result)
  })
  .catch((err)=>{
    res.status(404).send(err)
  })
});

/* POST CREATE player */
router.post('/new', (req, res, next) => {
  Player.create(req.body)
  .then((result)=>{
    res.status(201).send(result)
  })
  .catch((err)=>{
    res.status(400).send(err)
  })
});

/* POST DELETE player */
router.post('/delete/:_id', (req, res, next) => {
  Player.findByIdAndDelete(req.params._id)
  .then((result)=>{
    res.status(200).redirect('/players')
  })
  .catch((err)=>{
    res.status(404).send(err)
  })
});

/* POST UPDATE player */
router.post('/update/:_id', (req, res, next) => {
  // req.body --> Lo que quiero editar
  // req.params._id  --> ID del jugador que quiero editar
  Player.findByIdAndUpdate(req.params._id, req.body)
  .then((result)=>{
    res.status(200).redirect(`/players/${req.params._id}`)
  })
  .catch((err)=>{
    res.status(404).send(err)
  })
});

module.exports = router;