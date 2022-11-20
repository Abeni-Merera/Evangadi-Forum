require('dotenv').config()
const express = require('express');
const cors=require('cors');
const userRouter=require('./server/api/users/user.router');
const questionRouter = require('./server/api/questions/question.router');

const answerRouter = require('./server/api/answers/answer.router');

const app=express();
const port = process.env.PORT;
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/api/users',userRouter);
app.use("/api/questions", questionRouter);
app.use("/api/answer",answerRouter);

process.on('uncaughtException', function (err) {
  // console.log(err);
});

  app.listen(port,()=>console.log(`listening at port http://localhost:${port}`));







// Some Awesome material Ui Css 

  // npm install --legacy-peer-deps


  // "@testing-library/jest-dom": "^5.16.5",
  //   "@testing-library/react": "^13.4.0",
  //   "@testing-library/user-event": "^13.5.0",
  //   "react": "^18.2.0",
  //   "react-dom": "^18.2.0",
  //   "react-scripts": "5.0.1",
  //   "web-vitals": "^2.1.4",
  //   "@emotion/react": "^11.10.0",
  //   "@emotion/styled": "^11.10.0",
  //   "@mui/icons-material": "^5.8.4",
  //   "@mui/material": "^5.9.3",
  //   "axios": "^0.27.2",
  //   "react-player": "^2.10.1",
  //   "react-router-dom": "^6.3.0"
