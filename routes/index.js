import express from 'express';

const router = express.Router();

/* GET home page. */
router.get('/',(req, res, next) => {
  res.render('index');
});

router.get('/signin', (req, res, next) => {
  res.render('form/signIn')
});

router.get('/login', (req, res, next) => {
  res.render('form/login')
});

export default router;
