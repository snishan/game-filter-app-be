import 'dotenv/config';
import createApp from './config/app.js';

const app = createApp();
const PORT = process.env.PORT || 3000;

// Connect to database and start server
const startServer = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error(`Error starting server: ${error.message}`);
    process.exit(1);
  }
};

startServer();