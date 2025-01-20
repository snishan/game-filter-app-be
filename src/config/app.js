import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import LoginRouter from '../routes/login.routers.js';
import DashboardRouter from '../routes/dashboard.router.js'

const createApp = () => {
  const app = express();

  // Middleware
  app.use(helmet());
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Routes

  app.use('/api/auth',LoginRouter)
  app.use('/api/dashboard',DashboardRouter)

  // Health check
  app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok' });
  });

  app.get("/", (req, res) => {
    res.json({ message: 'Hello BE 1' });
  });

  return app;
};

export default createApp;