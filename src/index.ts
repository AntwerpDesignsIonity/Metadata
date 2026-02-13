import express, { Application } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import metadataRoutes from './api/routes/metadata.routes';
import linkRoutes from './api/routes/link.routes';
import { errorHandler } from './api/middleware/error.middleware';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/metadata', metadataRoutes);
app.use('/api/links', linkRoutes);

// Health check
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Metadata API is running' });
});

// Error handling middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
