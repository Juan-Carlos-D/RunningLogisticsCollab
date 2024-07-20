const app = express();
const port = 5001;

import express from 'express'
import cors from 'cors'
import db from './config/db.js'
import authRoutes from './routes/authRoutes.js'

//Middleware 
//Parse JSON bodies
app.use(express.json());
//Cross-Origin Resource Sharing
app.use(cors({
    origin: "http://localhost:3000"
}))



//Routes
app.use('/api/auth', authRoutes);

//Define a simple route
app.get('/', (req, res) => {
    console.log('/ Route')
    res.send('Hello World!');
});

//Start the Server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})