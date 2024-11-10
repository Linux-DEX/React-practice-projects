import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(bodyParser.json());

app.use(cors({
  origin: ['http://localhost:5173', 'http://another-origin.com'], // Multiple allowed origins
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

const dbURI = 'mongodb://localhost:27017/ISR'; 

mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB - Database: ISR'))
  .catch((err) => console.error('MongoDB connection error:', err));

interface IUser {
  name: string;
  email: string;
  userId: string;
  password: string;
}

const userSchema = new mongoose.Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  userId: { type: String, required: true, unique: true },
  password: { type: String, required: true }
}, {
  collection: 'Users' 
});

const User = mongoose.model<IUser>('User', userSchema);

app.get('/users', async (req, res) => {
  try {
    const users = await User.find(); 
    res.json(users); 
  } catch (err) {
    res.status(500).json({ message: 'Error fetching users' });
  }
});

app.post('/users', async (req: Request, res: Response) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user data', error });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
