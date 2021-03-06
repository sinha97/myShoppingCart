require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();
app.use(express.static("public"));

// Routes
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const categoryRoutes = require('./routes/category');
const productRoutes = require('./routes/product');
const orderRoutes = require('./routes/order');
const stripeRoutes = require('./routes/stripepayment');

mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    })
    .then(() => {
    console.log("DB connected...");
    });

// Middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);
app.use('/api', orderRoutes);
app.use('/api', stripeRoutes);


if (process.env.NODE_ENV == "production") {
    app.use(express.static("projfrontend/build"));
     app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'projfrontend','build','index.html'));
    });
}

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`App listening at ${port}`)
});

