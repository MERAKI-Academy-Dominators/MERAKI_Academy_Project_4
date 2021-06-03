const express = require('express');
const cors = require('cors');
const db = require('./db/db');

const app = express();

//routers
const registerRouter = require('./routers/routes/auth/register');
//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());

//app routers
app.use("/register" , registerRouter)
const PORT = process.env.PORT || 5000;
app.use(PORT, () => {
	console.log(`Server On ${PORT}`);
});
