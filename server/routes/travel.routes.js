// TODO: connect controller to the routes
const UserController = require("../controllers/user.controller")
const TravelPlanController = require("../controllers/travelPlan.controller")

module.exports = app => {
   
app.get("/find/:username/:password", UserController.findUser),
        
app.post("/createNewUser", UserController.create),
       
app.get('/getUser/:id', UserController.getUser),
 


app.post('/createTrip', TravelPlanController.create),

app.get('/findOthersTrips/:id', TravelPlanController.findOtherUsersTrip)

app.get('/findYourTrips/:id', TravelPlanController.findUsersTrip)

app.get('/findTrip/:trip',TravelPlanController.findTrip)

app.put('/joinTrip', TravelPlanController.joinTrip)

app.put('/deleteYourTrips', TravelPlanController.deleteYourTrips)

}