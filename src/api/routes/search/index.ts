import express from 'express';
import * as searchCtrl from './search.ctrl';

const router = express.Router();

router.get('/getBooks', searchCtrl.getBooks);

export default router;