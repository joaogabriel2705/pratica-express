import { getAll, insert, update, remove} from './../controller/userController.js';

import express from 'express';
const router = express.Router();

router.get('/user', getAll);
router.post('/user', insert);
router.put('/user/:id', update);
router.delete('/user/:id', remove);

export default router;
