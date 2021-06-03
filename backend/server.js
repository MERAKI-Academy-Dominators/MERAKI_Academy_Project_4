const express = require('express');
const cors = require('cors');
const db = require('./db/db');


const app = express();

//routers
const registerRouter = require('./routers/routes/auth/register');
const loginRouter = require("./routers/routes/auth/login")

//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());

app.use("/login" , loginRouter)

//app routers
app.use(registerRouter)
const PORT = process.env.PORT || 5000;
app.use(PORT, () => {
	console.log(`Server On ${PORT}`);
});
