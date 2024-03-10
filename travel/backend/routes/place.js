const express = require("express")
const {admin} = require("../config");


router = express.Router();



router.get("/places", async (req, res) => {

    const db = admin.firestore();
    try {
       
        const placesSnapshot = await db.collection('place').get();
        const places = [];
        
        placesSnapshot.forEach((doc) => {
            places.push(doc.data());
        });
    
        res.send(places);
      } catch (error) {
        console.error('Error get places:', error);
        res.status(500).send({ error: 'Internal Server Error' });
      }
  });





router.post("/comment", async (req, res) => {
    console.log(req.body.comment)
    const db = admin.firestore();
    const {comment} = req.body;
    try {
        await db.collection('Comments').add({
          text: comment,
          timestamp: admin.firestore.FieldValue.serverTimestamp(),
          name : "Folk"
        });
        res.send({ msg: "Comment added successfully" });
      } catch (error) {
        console.error('Error adding comment:', error);
        res.status(500).send({ error: 'Internal Server Error' });
      }
  });



exports.router = router;