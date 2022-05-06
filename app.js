require('dotenv').config();
const express =  require("express");
const mongoose =  require("mongoose");
const nodemailer = require("nodemailer");
const app = express();

mongoose.connect('mongodb://localhost:27017/autoE-mailDB', {useNewUrlParser: true});

const topics_Subscribed_Schema = mongoose.Schema({
    breakFast:[],
    morningSnacks:[],
    lunch:[],
    afternoonSnacks:[],
    eveningSnacks:[],
    dinner:[],
    nightSnacks:[]
});

const EmailAndTopic = mongoose.model("EmialAndTopic", topics_Subscribed_Schema);
const newUser = new EmailAndTopic({
    breakFast: ["ramandeepsinghbhella@gmail.com", "ramanbhella20@gmail.com"],
    morningSnacks: ["ramandeepsingh", "ramanbhella20@gmail.com"],
    lunch: ["ramandeepsingh", "ramanbhella20@gmail.com"],
    afternoonSnacks: ["ramandeepsingh"],
    eveningSnacks: ["ramandeepsingh"],
    dinner: ["ramandeepsingh"],
    nightSnacks: ["ramandeepsingh"],
});
// newUser.save();

const topics = mongoose.Schema({
    breakFast:[],
    morningSnacks:[],
    lunch:[],
    afternoonSnacks:[],
    eveningSnacks:[],
    dinner:[],
    nightSnacks:[]
});

const Topic = mongoose.model("Topic", topics);

const newTopic = new Topic({
    breakFast:["detailed breakfast"],
    morningSnacks:["detailed morning snacks"],
    lunch:["detailed lunch"],
    afternoonSnacks:["detailed afternoon snacks"],
    eveningSnacks:["detailed evening snacks"],
    dinner:["detailed dinner"],
    nightSnacks:["detailed night snacks"]
});

// newTopic.save();

const d = new Date();
let hour = d.getHours();

if(hour===7){
    var reqEmails = [];
    var reqTopic = [];
    EmailAndTopic.find(function(err, foundEmailAndTopic){
        for(let i=0; i<foundEmailAndTopic[0].breakFast.length; i++){
            reqEmails.push(foundEmailAndTopic[0].breakFast[i]);
        } 
        Topic.find(function(err, foundEmail){
            for(let i=0; i<foundEmail[0].breakFast.length; i++){
                reqTopic.push(foundEmail[0].breakFast[i]);
            }
            if(foundEmail && foundEmailAndTopic){
                // console.log(reqEmails);
                // console.log(reqTopic);
                // console.log(process.env.SMTP_USER);
                // console.log(process.env.SMTP_PASS);
                // console.log(process.env.SMTP_PORT);
                // console.log(process.env.SMTP_HOST);
                const transporter = nodemailer.createTransport({
                    host: process.env.SMTP_HOST,
                    port: process.env.SMTP_PORT,
                    secure: false,
                    auth: {
                      user: process.env.SMTP_USER,
                      pass: process.env.SMTP_PASS,
                    },
                  });
                  transporter.verify((err, success) => {
                      if (err) console.error(err);
                      console.log('Your config is correct');
                  });
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
                        ciphers:'SSLv3'
                    }
                    });
                    const message = {
                      from: "raman@pro.in", // sender address
                      to: "rahul@pro.in", // list of receivers
                      subject: "This is breakfast meal", // Subject line
                      text: "xxy", // plain text body
                    };
                    await transporter.sendMail(message);
                  };
                  mailHelper();
            }
            else{
                console.log(err)
            }
        });    
        
    });
}


if(hour===10){
    var reqEmails = [];
    var reqTopic = [];
    EmailAndTopic.find(function(err, foundEmailAndTopic){
        for(let i=0; i<foundEmailAndTopic[0].morningSnacks.length; i++){
            reqEmails.push(foundEmailAndTopic[0].morningSnacks[i]);
        } 
        Topic.find(function(err, foundEmail){
            for(let i=0; i<foundEmail[0].morningSnacks.length; i++){
                reqTopic.push(foundEmail[0].morningSnacks[i]);
            }
            if(foundEmail && foundEmailAndTopic){
                // console.log(reqEmails);
                // console.log(reqTopic);
                // console.log(process.env.SMTP_USER);
                // console.log(process.env.SMTP_PASS);
                // console.log(process.env.SMTP_PORT);
                // console.log(process.env.SMTP_HOST);
                const transporter = nodemailer.createTransport({
                    host: process.env.SMTP_HOST,
                    port: process.env.SMTP_PORT,
                    secure: true,
                    auth: {
                      user: process.env.SMTP_USER,
                      pass: process.env.SMTP_PASS,
                    },
                    tls: {
                        ciphers:'SSLv3'
                    }
                  });
                  transporter.verify((err, success) => {
                      if (err) console.error(err);
                      console.log('Your config is correct');
                  });
                const mailHelper = async () => {
                    const transporter = nodemailer.createTransport({
                      host: process.env.SMTP_HOST,
                      port: process.env.SMTP_PORT,
                      secure: false,
                      auth: {
                        user: process.env.SMTP_USER,
                        pass: process.env.SMTP_PASS,
                      },
                    });
                    const message = {
                      from: "raman@pro.in", // sender address
                      to: "rahul@pro.in", // list of receivers
                      subject: "This is morning snacks meal", // Subject line
                      text: "xxy", // plain text body
                    };
                    await transporter.sendMail(message);
                  };
                  mailHelper();
            }
            else{
                console.log(err)
            }
        });    
        
    });
}
if(hour===13){
    var reqEmails = [];
    var reqTopic = [];
    EmailAndTopic.find(function(err, foundEmailAndTopic){
        for(let i=0; i<foundEmailAndTopic[0].lunch.length; i++){
            reqEmails.push(foundEmailAndTopic[0].lunch[i]);
        } 
        Topic.find(function(err, foundEmail){
            for(let i=0; i<foundEmail[0].lunch.length; i++){
                reqTopic.push(foundEmail[0].lunch[i]);
            }
            if(foundEmail && foundEmailAndTopic){
                // console.log(reqEmails);
                // console.log(reqTopic);
                // console.log(process.env.SMTP_USER);
                // console.log(process.env.SMTP_PASS);
                // console.log(process.env.SMTP_PORT);
                // console.log(process.env.SMTP_HOST);
                const transporter = nodemailer.createTransport({
                    host: process.env.SMTP_HOST,
                    port: process.env.SMTP_PORT,
                    secure: true,
                    auth: {
                      user: process.env.SMTP_USER,
                      pass: process.env.SMTP_PASS,
                    },
                    tls: {
                        ciphers:'SSLv3'
                    }
                  });
                  transporter.verify((err, success) => {
                      if (err) console.error(err);
                      console.log('Your config is correct');
                  });
                const mailHelper = async () => {
                    const transporter = nodemailer.createTransport({
                      host: process.env.SMTP_HOST,
                      port: process.env.SMTP_PORT,
                      secure: false,
                      auth: {
                        user: process.env.SMTP_USER,
                        pass: process.env.SMTP_PASS,
                      },
                    });
                    const message = {
                      from: "raman@pro.in", // sender address
                      to: "rahul@pro.in", // list of receivers
                      subject: "This is lunch meal", // Subject line
                      text: "xxy", // plain text body
                    };
                    await transporter.sendMail(message);
                  };
                  mailHelper();
            }
            else{
                console.log(err)
            }
        });    
        
    });
}
if(hour===16){
    var reqEmails = [];
    var reqTopic = [];
    EmailAndTopic.find(function(err, foundEmailAndTopic){
        for(let i=0; i<foundEmailAndTopic[0].afternoonSnacks.length; i++){
            reqEmails.push(foundEmailAndTopic[0].afternoonSnacks[i]);
        } 
        Topic.find(function(err, foundEmail){
            for(let i=0; i<foundEmail[0].afternoonSnacks.length; i++){
                reqTopic.push(foundEmail[0].afternoonSnacks[i]);
            }
            if(foundEmail && foundEmailAndTopic){
                // console.log(reqEmails);
                // console.log(reqTopic);
                // console.log(process.env.SMTP_USER);
                // console.log(process.env.SMTP_PASS);
                // console.log(process.env.SMTP_PORT);
                // console.log(process.env.SMTP_HOST);
                const transporter = nodemailer.createTransport({
                    host: process.env.SMTP_HOST,
                    port: process.env.SMTP_PORT,
                    secure: true,
                    auth: {
                      user: process.env.SMTP_USER,
                      pass: process.env.SMTP_PASS,
                    },
                    tls: {
                        ciphers:'SSLv3'
                    }
                  });
                  transporter.verify((err, success) => {
                      if (err) console.error(err);
                      console.log('Your config is correct');
                  });
                const mailHelper = async () => {
                    const transporter = nodemailer.createTransport({
                      host: process.env.SMTP_HOST,
                      port: process.env.SMTP_PORT,
                      secure: false,
                      auth: {
                        user: process.env.SMTP_USER,
                        pass: process.env.SMTP_PASS,
                      },
                    });
                    const message = {
                      from: "raman@pro.in", // sender address
                      to: "rahul@pro.in", // list of receivers
                      subject: "This is afternoon snacks meal", // Subject line
                      text: "xxy", // plain text body
                    };
                    await transporter.sendMail(message);
                  };
                  mailHelper();
            }
            else{
                console.log(err)
            }
        });    
        
    });
}
if(hour===19){
    var reqEmails = [];
    var reqTopic = [];
    EmailAndTopic.find(function(err, foundEmailAndTopic){
        for(let i=0; i<foundEmailAndTopic[0].eveningSnacks.length; i++){
            reqEmails.push(foundEmailAndTopic[0].eveningSnacks[i]);
        } 
        Topic.find(function(err, foundEmail){
            for(let i=0; i<foundEmail[0].eveningSnacks.length; i++){
                reqTopic.push(foundEmail[0].eveningSnacks[i]);
            }
            if(foundEmail && foundEmailAndTopic){
                // console.log(reqEmails);
                // console.log(reqTopic);
                // console.log(process.env.SMTP_USER);
                // console.log(process.env.SMTP_PASS);
                // console.log(process.env.SMTP_PORT);
                // console.log(process.env.SMTP_HOST);
                const transporter = nodemailer.createTransport({
                    host: process.env.SMTP_HOST,
                    port: process.env.SMTP_PORT,
                    secure: true,
                    auth: {
                      user: process.env.SMTP_USER,
                      pass: process.env.SMTP_PASS,
                    },
                    tls: {
                        ciphers:'SSLv3'
                    }
                  });
                  transporter.verify((err, success) => {
                      if (err) console.error(err);
                      console.log('Your config is correct');
                  });
                const mailHelper = async () => {
                    const transporter = nodemailer.createTransport({
                      host: process.env.SMTP_HOST,
                      port: process.env.SMTP_PORT,
                      secure: false,
                      auth: {
                        user: process.env.SMTP_USER,
                        pass: process.env.SMTP_PASS,
                      },
                    });
                    const message = {
                      from: "raman@pro.in", // sender address
                      to: "rahul@pro.in", // list of receivers
                      subject: "This is evening snacks meal", // Subject line
                      text: "xxy", // plain text body
                    };
                    await transporter.sendMail(message);
                  };
                  mailHelper();
            }
            else{
                console.log(err)
            }
        });    
        
    });
}
if(hour===22){
    var reqEmails = [];
    var reqTopic = [];
    EmailAndTopic.find(function(err, foundEmailAndTopic){
        for(let i=0; i<foundEmailAndTopic[0].dinner.length; i++){
            reqEmails.push(foundEmailAndTopic[0].dinner[i]);
        } 
        Topic.find(function(err, foundEmail){
            for(let i=0; i<foundEmail[0].dinner.length; i++){
                reqTopic.push(foundEmail[0].dinner[i]);
            }
            if(foundEmail && foundEmailAndTopic){
                // console.log(reqEmails);
                // console.log(reqTopic);
                // console.log(process.env.SMTP_USER);
                // console.log(process.env.SMTP_PASS);
                // console.log(process.env.SMTP_PORT);
                // console.log(process.env.SMTP_HOST);
                const transporter = nodemailer.createTransport({
                    host: process.env.SMTP_HOST,
                    port: process.env.SMTP_PORT,
                    secure: true,
                    auth: {
                      user: process.env.SMTP_USER,
                      pass: process.env.SMTP_PASS,
                    },
                    tls: {
                        ciphers:'SSLv3'
                    }
                  });
                  transporter.verify((err, success) => {
                      if (err) console.error(err);
                      console.log('Your config is correct');
                  });
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
                        ciphers:'SSLv3'
                    }
                    });
                    const message = {
                      from: "raman@pro.in", // sender address
                      to: "rahul@pro.in", // list of receivers
                      subject: "This is dinner meal", // Subject line
                      text: "xxy", // plain text body
                    };
                    await transporter.sendMail(message);
                  };
                  mailHelper();
            }
            else{
                console.log(err)
            }
        });    
        
    });
}





app.listen(3000, function(){
    console.log("Server started on port 3000");
});