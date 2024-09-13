const env = require("dotenv").config();
const express = require("express");
const cors = require("cors")
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;
const fs = require("fs");

app.use(cors({origin : "*"}));

app.use(express.json());
app.use(express.urlencoded({ extended : true}));
app.set("view engine", "ejs");
app.use(express.static(path.join( __dirname, "fonthend")));

app.get("/", (req, res) => {

    function greadFind(mark) {
        if (mark >= 85 && mark <= 100) {
            return "O+"
        } else if (mark >= 70 && mark <= 84.99) {
            return "O"
        } else if (mark >= 60 && mark <= 69.99) {
            return "A"
        } else if (mark >= 55 && mark <= 59.99) {
            return "B+"
        } else if (mark >= 48 && mark <= 54.99) {
            return "B"
        } else if (mark >= 36 && mark <= 47.99) {
            return "C"
        } else if (mark >= 0 && mark <= 35.99) {
            return "D"
        }
    }
    fs.readFile(`${__dirname}/user.json`, "utf8", (err, data) => {
        info = JSON.parse(data);
        userJson = JSON.parse(data).subjectsAndMarks;
    
        const userData = {
            name: info.name,
            enrollmentNo: info.enrollmentNo,
            spdid: info.spdid,
            subjectsAndMarks: [{
                subjectCode: userJson[0].subjectCode,
                subject: userJson[0].subject,
                external: Number(userJson[0].external),
                internal: Number(userJson[0].internal),
                overall : Number(userJson[0].internal) + Number(userJson[0].external),
                gread: greadFind(Number(userJson[0].internal) + Number(userJson[0].external))
            },
            {
                subjectCode: userJson[1].subjectCode,
                subject: userJson[1].subject,
                external: Number(userJson[1].external),
                internal: Number(userJson[1].internal),
                overall : Number(userJson[1].internal) + Number(userJson[1].external),
                gread: greadFind(Number(userJson[1].internal) + Number(userJson[1].external))
            },
            {
                subjectCode: userJson[2].subjectCode,
                subject: userJson[2].subject,
                external: Number(userJson[2].external),
                internal: Number(userJson[2].internal),
                overall : Number(userJson[2].internal) + Number(userJson[2].external),
                gread: greadFind(Number(userJson[2].internal) + Number(userJson[2].external))
            },
            {
                subjectCode: userJson[3].subjectCode,
                subject: userJson[3].subject,
                external: Number(userJson[3].external),
                internal: Number(userJson[3].internal),
                overall : Number(userJson[3].internal) + Number(userJson[3].external),
                gread: greadFind(Number(userJson[3].internal) + Number(userJson[3].external))
            },
            {
                subjectCode: userJson[4].subjectCode,
                subject: userJson[4].subject,
                external: Number(userJson[4].external),
                internal: Number(userJson[4].internal),
                overall : Number(userJson[4].internal) + Number(userJson[4].external),
                gread: greadFind(Number(userJson[4].internal) + Number(userJson[4].external))
            },
            {
                subjectCode: userJson[5].subjectCode,
                subject: userJson[5].subject,
                external: Number(userJson[5].external),
                internal: Number(userJson[5].internal),
                overall : Number(userJson[5].internal) + Number(userJson[5].external),
                gread: greadFind(Number(userJson[5].internal) + Number(userJson[5].external))
            },
            {
                subjectCode: userJson[6].subjectCode,
                subject: userJson[6].subject,
                external: Number(userJson[6].external),
                internal: Number(userJson[6].internal),
                overall : Number(userJson[6].internal) + Number(userJson[6].external),
                gread: greadFind(Number(userJson[6].internal) + Number(userJson[6].external))
            },
            {
                subjectCode: userJson[7].subjectCode,
                subject: userJson[7].subject,
                external: 0,
                internal: Number(userJson[7].internal),
                overall : Number(userJson[7].internal),
                external: 0,
                gread: greadFind(Number(userJson[7].internal) + 0 )
            },
            {
                subjectCode: userJson[8].subjectCode,
                subject: userJson[8].subject,
                external: 0,
                internal: Number(userJson[8].internal),
                overall : Number(userJson[8].internal),
                external: 0,
                gread: greadFind(Number(userJson[8].internal) + 0 )
            }]
    
        };
        res.render("index", {user : userData})
    });
    
});

app.post("/creat", (req, res) => {
    fs.writeFile(`${__dirname}/user.json`, JSON.stringify(req.body), (err, data) => {});

    res.send(req.body);
});


app.listen(port, () => console.log(`sarver is start in port no ${port}`));