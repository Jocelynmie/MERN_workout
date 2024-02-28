const express = require('express')
const {
    getWorkouts,
    getworkout,
    createWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutControllers')
const router = express.Router()

router.get('/',getWorkouts)

router.get('/:id',getworkout) 

router.post('/',createWorkout)

router.delete('/:id',deleteWorkout)
router.patch('/:id',updateWorkout)

module.exports = router