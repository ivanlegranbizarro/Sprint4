import express from "express";
import createError from "http-errors";
import logger from "morgan";
import indexRouter from "./routes/index.js";
import usersRouter from "./routes/user.js";

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', indexRouter);
app.use('/user', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
