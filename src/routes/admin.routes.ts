import express from 'express';
const router = express.Router();
import authorize from '../middlewares/admin_authorize'
import { login_user } from '../controllers/admin_login'

router.use(express.urlencoded({ extended: true }));


router.get('/login', (req, res) => {
    res.render('admin/admin_login');
});

router.post('/login', login_user);

router.get('/', authorize, (req, res) => {
    res.render('admin/landing_page');
});


module.exports = router