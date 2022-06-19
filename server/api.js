const express = require('express');
const apiRouter = express.Router();

//All the different get, post methods

apiRouter.get("/test", (req,res,next)=> {
    res.send("something ");
})

//get array of minions
apiRouter.get("/api/minions", (req,res,next)=> {
    res.send(minionsArray);
})
// create new minion and save to database
apiRouter.post("/api/minions", (req,res,next)=> {
    res.send(minionsArray);
})
// get single minion by id
apiRouter.get("/api/minions", (req,res,next)=> {
    res.send(minionsArray);
})
// put update single minion by id
apiRouter.get("/api/minions", (req,res,next)=> {
    res.send(minionsArray);
})
// delete single minion by id
apiRouter.get("/api/minions", (req,res,next)=> {
    res.send(minionsArray);
})


// GET /api/ideas to get an array of all ideas.
// POST /api/ideas to create a new idea and save it to the database.
// GET /api/ideas/:ideaId to get a single idea by id.
// PUT /api/ideas/:ideaId to update a single idea by id.
// DELETE /api/ideas/:ideaId to delete a single idea by id.
// add next(req.id) at the end of each request

// GET /api/meetings to get an array of all meetings.
// POST /api/meetings to create a new meeting and save it to the database.
// DELETE /api/meetings to delete all meetings from the database.



For all /api/minions and /api/ideas routes, any POST or PUT requests will send their 
new/updated resources in the request body. POST request bodies will not have an id property,
 you will have to set it based on the next id in sequence.

For /api/meetings POST route, no request body is necessary, as meetings are generated
 automatically by the server upon request. Use the provided createMeeting 
 function exported from db.js to create a new meeting object.






















module.exports = apiRouter;
