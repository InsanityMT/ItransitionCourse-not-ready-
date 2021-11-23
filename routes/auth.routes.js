const { Router } = require('express')
const router = Router();

router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body
    } catch (e) {
        res.status(500).json({message: 'something goes wrong....'})
    }
})

router.post('/login', async (req, res) => {
    try {

    } catch (e) {

    }
})

module.exports = router;
