import express from 'express';
import search from './routes/search';

const api = express.Router();

api.use('/search', search);

export default api;