const express = require("express");
const cors = require("cors");
const {admin} = require("./config");
const app = express();
app.use(express.json());
app.use(cors());

// var admin = require("firebase-admin");

// var serviceAccount = require("./travel-b2e34-firebase-adminsdk-bn6t6-eb904720fe.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount)
// });
console.log(admin)





app.get("/", async (req, res) => {
    const db = admin.firestore();
    let customRef = db.collection("Users");

    customRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is a function to retrieve the data of the document
        console.log(doc.id, " => ", doc.data());
      });
    }).catch((error) => {
      console.log("Error getting documents: ", error);
    });
    
 
     res.send({msg:"User"})
});

app.post("/create", async (req, res) => {
  
  res.send({ msg: "User Added" });
});

app.post("/update", async (req, res) => {


  res.send({ msg: "Updated" });
});

app.post("/delete", async (req, res) => {

  res.send({ msg: "Deleted" });
});
app.listen(4000, () => console.log("Up & RUnning *4000"));