const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');
const userRouter = require('./routes/userRouter');
const transactionRouter = require('./routes/transactionRouter');

const app = express();

mongoose.connect("mongodb+srv://sakshamv108:SakSham325@budgetwiser.e0hmhr6.mongodb.net/BudgetWiser")
.then(() => console.log("DB Connected"))
.catch((e) => console.log(e));


app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://budget-wiser-frontend.vercel.app"
    ]
  })
);
app.use(express.json());

app.use("/api/v1/users", userRouter);
app.use("/api/v1/transactions", transactionRouter);

app.use(errorHandler);

const port = process.env.PORT || 8000;

app.listen(port, () =>
  console.log(`Server running on port ${port}`)
);