import express from 'express';
import authorize from '../middlewares/authorize';
import register from '../controllers/register_new_user'
import {userValidationRules} from '../middlewares/user_data_validation_rules'
const router = express.Router();

import {loginUser, getLogin, logoutUser} from '../controllers/handle_login';
import {getLandingPage} from '../controllers/landing_page'
import { createExam } from '../controllers/exam_creation';
import { getSubmissionById } from '../controllers/get_exam';
import { getSummaryById } from '../controllers/get_exam';


const json = express.json()

router.get('/', authorize, getLandingPage);

router.get('/login', getLogin);
router.post('/login', loginUser);

router.get('/logout', logoutUser);

router.get('/register', (req, res) => {res.render('user/register');});
router.post('/register', json, userValidationRules(),  register);

router.get('/new_exam', authorize, createExam);

router.post('landing_page', authorize, getLandingPage)
// Retrieve the student's exam submission.
router.get('/submission', authorize, getSubmissionById)
// Retrive the student's exam summary.
router.get('/summary', authorize, getSummaryById)


module.exports = router