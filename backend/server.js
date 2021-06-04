const express = require('express');
const cors = require('cors');
const db = require('./db/db');

const app = express();

//routers
const registerRouter = require('./routers/routes/auth/register');
const requestRouter = require('./routers/routes/auth/createRequest');
const hospitalsRouter = require('./routers/routes/auth/getAllHospitals');

//built-in middlewares
app.use(express.json());

//third-party middleware
app.use(cors());

//app routers
app.use(registerRouter)
app.use(requestRouter)
app.use(hospitalsRouter)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
	console.log(`Server On ${PORT}`);
});
