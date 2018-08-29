const Router = require('express-promise-router');
const router = new Router();
module.exports = router;
const { Doctors } = require('../db');

// router.get('/:id', async (req, res) => {
//     const { id } = req.params
//     const { rows } = await db.query('SELECT * FROM users WHERE id = $1', [id])
//     res.send(rows[0])
// })

router.get('/', async (req, res) => {
    const result = await Doctors.findAll();
    res.send(result);
})

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    const result = await Doctors.find({
        where: {id}
    });
    res.send(result);
})

router.post('/create', async (req, res) => {
    const { name } = req.body;
    try{
        const result = await Doctors.create({ name });
        
        if(result) {
            res.send('Add Doctor successful!')
        }
    } catch(err) {
        res.send('Add Doctor failed! ', err.message);
    }
})

router.post('/update/:id', async (req, res) => {
    const { name } = req.body;
    const { id } = req.params;
    try{
        const result = await Doctors.update({ name }, {
            where: { id }
        });
        
        if(result) {
            res.send('Update successful!')
        }
    } catch(err) {
        res.send('Update failed! ', err.message);
    }
})

router.post('/delete/:id', async (req, res) => {
    const { id } = req.params;
    try{
        const result = await Doctors.destroy({
            where: { id }
        });
        
        if(result) {
            res.send('Delete successful!')
        } else {
            res.send('Item not found!');
        }
    } catch(err) {
        res.send('Delete failed! ', err.message);
    }
})