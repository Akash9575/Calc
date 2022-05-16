const express = require("express");
const app = express();
const cors = require("cors")

const mysql = require("mysql")

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    password: "password",
    database: "adminsystem"
})


app.post("/create",(req,res) => {
   
    const {fname,lname,email,gender,pass,cpass} = req.body.data;
    db.query(" SELECT email FROM user WHERE email = ? ",
        [email],(err,result) => {
            if (err) {
                console.log(err)
            }
            else {
                if (result.length > 0) {
                    console.log("email already exist")
                    return res.json({ error: "Email already exist" })
                } 
                else {
                    
                    db.query("INSERT INTO user (fname,lname,email,gender,pass,cpass) VALUE (?,?,?,?,?,?)",
                    [fname, lname, email, gender, pass, cpass],(err,result1) => {
                        if(err){
                            console.log(err);
                        }
                        else{
                            db.query("SELECT userid from user WHERE email = ?",
                                [email],(err,result2)=>{
                                    if(err){
                                        console.log(err)
                                    }
                                    else{
                                        req.body.data.allEduction.map((e) =>{

                                            db.query("INSERT INTO eduction (institute ,cgpa, startDate, endDate, userid) VALUE (?,?,?,?,?) " ,
                                                [e.institute ,e.cgpa, e.startDate, e.endDate, result2[0].userid],(err,result) => {
                                                    if(err){
                                                        console.log(err)
                                                    }
                                                    else{
                                                        // res.json({msg: "Register Successful !!"});
                                                    }
                                                }
                                            )
                                        })
                                    }
                                }
                                )
                        }
                    }
                    
                    )
                }

            }
        })


})

app.post("/userLogin",(req,res) => {

    const {email,password} = req.body.data;

    console.log(req.body.data)
    
    db.query( "SELECT email FROM user WHERE email = ?",
     [email],(err,result) => {
         if(err){
             console.log(err)
         }
         else{
             if(result.length > 0){
                 db.query( "SELECT pass FROM user WHERE email = ?", 
                 [email],(err,result1) => {
                     if(err){
                         console.log(err)
                     }
                     else{
                         if( result1[0].pass === password )
                         {
                        //  res.send("login success")
                        return res.json({ message: "login success" })
                        }
                        else{
                         return res.json({ error: "Invalid username or password" })
                        }
                     }
                 }
                 )
             }
             else{
                return res.json({ error: "You are note register" })

             }
         }
     }
    )
})



app.get("/userDetails" , (req,res) => {
    
     const {email} = req.headers
     
     db.query("SELECT * FROM user WHERE email = ? ",
        [email],(err,result) => {
            if(err){
                console.log(err)
            }
            else{
               return res.json({result})
            }
        }
     )
 
})

app.get("/userEduction" , (req,res) => {

    const {email} = req.headers

    db.query("SELECT userid FROM user WHERE email = ? " ,
        [email],(err,result) => {
            if(err){
                console.log(err)
            }
            else{

                db.query("SELECT * FROM eduction WHERE userid = ?" , 
                 [result[0].userid],(err,result1) => {
                     if(err){
                         console.log(err)
                     }
                     else{
                        // console.log(result1)

                        return res.json({result1})
                     }
                 }
                )
            }
        }
    )

})



// app.post("/createEduction" , (req,res) => {
//        const institute = req.body.institute;
//        const cgpa = req.body.cgpa;
//        const startDate = req.body.startDate;
//        const endDate = req.body.endDate;

//     db.query("INSERT INTO eduction (institute ,cgpa, startDate, endDate) VALUE (?,?,?,?)",
//         [institute,cgpa,startDate,endDate],(err,result) => {
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 res.send("education value added")
//             }
//         }
//     )
// })


app.listen(5000, () => {
    console.log("your server is running")
})