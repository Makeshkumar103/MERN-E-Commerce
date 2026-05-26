const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser');
const cors = require('cors')
//22.00

mongoose.connect('')
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB connection error:', err));


const app = express()
const PORT = process.env.PORT || 5000;


app.use(
    cors({
        origin: 'http://localhost:3000',
        methods : ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: [
            "Content-Type",
            "Authorization",
            "Cache-Control",
            "Expires",
            "Pragma",
        ],
        credentials : true
    })
)

app.use(cookieParser());
app.use(express.json());



app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`)
})
