import express from 'express';
import { GetGames,GetProvider,GetGroups } from '../controllers/dashboard.controller.js';

const router = express.Router();

router.get('/getData', GetGames);
router.get('/getProviders', GetProvider);
router.get('/getGroups', GetGroups);

export default router;