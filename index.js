const nodemailer = require('nodemailer');
require("dotenv").config();

async function send(){

const transpoerter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465, // 587
    secure: true, //if 465 true(use TLS) , if 587 false(TLS is used if server supports the STARTTLS extension)
    auth: {
    user: process.env.USER,
    pass: process.env.PASS}
    })

const info = await transpoerter.sendMail({
        from: "TEST <TEST@gmail.com>", // email sender
        to:  ["TEST1@gmail.com","TEST2@gmail.com"], // send to
        subject : "Hi",
        text: "hello",
        attachments:[ 
            {   // utf-8 string as an attachment
            filename: 'text1.txt',
            content: 'WOW'
            },
            {   // file on disk as an attachment
            filename: 'text.txt',
            path: './text.txt' // stream this file
            }
        ]
    });
    // console.log(info.messageId);
    // console.log(info.accepted);
    // console.log(info.rejected);
    // console.log(info.response);
    console.log(info);
}

send().catch((e) => console.log(e));
