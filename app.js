require('dotenv').config();
const express =  require("express");
const mongoose =  require("mongoose");
const cron = require("node-cron");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
mongoose.connect('mongodb://localhost:27017/autoE-mailDB', {useNewUrlParser: true});

const topics_Subscribed_Schema = mongoose.Schema({
  6: [],
  9: [],
  12: [],
  15: [],
  18: [],
  21: [],
  22: [],
});

const EmailAndTopic = mongoose.model("EmailAndTopic", topics_Subscribed_Schema);
const newUser = new EmailAndTopic({
  6: ["ramandeepsinghbhella@gmail.com", "ramanbhella20@gmail.com"],
  9: ["ramandeepsingh", "ramanbhella20@gmail.com"],
  12: ["ramandeepsingh", "ramanbhella20@gmail.com"],
  15: ["ramandeepsingh@gmail.com"],
  18: ["ramandeepsingh@gmail.com"],
  21: ["ramandeepsingh@gmail.com"],
  22: ["ramandeepsingh@gmail.com"],
});
// newUser.save();

const topics = mongoose.Schema({
    6:[],
    9:[],
    12:[],
    15:[],
    18:[],
    21:[],
    22:[]
});

const Topic = mongoose.model("Topic", topics);

const newTopic = new Topic({
    6:["detailed breakfast"],
    9:["detailed morning snacks"],
    12:["detailed lunch"],
    15:["detailed afternoon snacks"],
    18:["detailed evening snacks"],
    21:["detailed dinner"],
    22:["detailed night snacks"]
});

// newTopic.save();

cron.schedule("0 * * * *", () => {
  console.log("running a task every hour");
  const d = new Date();
  let hour = d.getHours();

  EmailAndTopic.find(function (err, foundEmailAndTopic) {
    Topic.find(function (err, foundtopic) {
      if (foundEmailAndTopic && foundtopic) {
        var frziHour = "six";
        console.log(foundtopic[0][hour][0]);
      }
    });
  });

  if (
    hour === 6 ||
    hour === 9 ||
    hour === 12 ||
    hour === 15 ||
    hour === 18 ||
    hour === 21 ||
    hour === 22
  ) {
    EmailAndTopic.find(function (err, foundEmailAndTopic) {
      Topic.find(function (err, foundtopic) {
        if (foundEmailAndTopic && foundtopic) {
          var reqEmails = [];
          var reqTopic = [];
          for (let i = 0; i < foundEmailAndTopic[0][hour].length; i++) {
            reqEmails.push(foundEmailAndTopic[0][hour][i]);
          }
          for (let i = 0; i < foundtopic[0][hour].length; i++) {
            reqTopic.push(foundtopic[0][hour][i]);
          }
          console.log(reqEmails);
          console.log(reqTopic);
          const mailHelper = async () => {
            const transporter = nodemailer.createTransport({
              host: process.env.SMTP_HOST,
              port: process.env.SMTP_PORT,
              secure: false,
              auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
              },
              tls: {
                ciphers: "SSLv3",
              },
            });
            const message = {
              from: "ramandeepsinghbhella@gmail.com", // sender address
              to: reqEmails, // list of receivers
              subject: "Here is your meal", // Subject line
              text: reqTopic[0], // plain text body
            };
            await transporter.sendMail(message);
          };
          mailHelper();
        }
      });
    });
  }
});


app.post("/postUser", async function(req, res){
  const eMail = req.body.eMail; // reuired
  const breakfast = req.body.breakfast; //type yes if you want to subscribe this meal
  const mornignSnack = req.body.mornignSnack; //type yes if you want to subscribe this meal
  const lunch = req.body.lunch; //type yes if you want to subscribe this meal
  const afternoonSnack = req.body.afternoonSnack; //type yes if you want to subscribe this meal
  const eveningSnack = req.body.eveningSnack; //type yes if you want to subscribe this meal
  const dinner = req.body.dinner; //type yes if you want to subscribe this meal
  const nightSnack = req.body.nightSnack; //type yes if you want to subscribe this meal

  const toBeUpdate = [
    breakfast,
    mornignSnack,
    lunch,
    afternoonSnack,
    eveningSnack,
    dinner,
  ];
  var count = 6;
  for (let i = 0; i < toBeUpdate.length; i++) {
    if (eMail && toBeUpdate[i]) {
      const email = await EmailAndTopic.find({
        _id: "6278c5c63bf061635e265edb",
      });
      email[0][count].push(eMail);
      await email[0].save();
    }
    count += 3;
  }
  if (eMail && nightSnack) {
    EmailAndTopic.updateOne(
      { _id: "6278c5c63bf061635e265edb" },
      { $push: { 22: eMail } },
      function (err, updated) {
        if (updated) {
          console.log("updated");
        }
      }
    );
    res.json("updated");
  }

  res.json("updated");
});


app.listen(3000, function(){
    console.log("Server started on port 3000");
});