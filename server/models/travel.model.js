const mongoose = require('mongoose'); // the software we need to actually define the objects strucutre for MongoDB/

const UserSchema = new mongoose.Schema({ // define the strucutre, and validation requirements of this type of object

    name: {
        type: String,
        required: [true, "email is required!"],
        minLength: [3, "Min email length is 3 chars."],
        maxLength: [100, "Max email length is 100 chars."],

    },
    username: {
        type: String,
        required: [true, "username is required!"],
        minLength: [3, "Min username length is 3 characters."],
        maxLength: [100, "Max username length is 100 characters"]
    },
    password: {
        type: String,
        required: [true, "password is required!"],
        minLength: [8, "Min password length is 8 characters."],
        maxLength: [100, "Max password length is 100 characters"]

    }
})


//convert the schema into an actual model - inits the database to recieve that data.
const User = mongoose.model("User", UserSchema)

// module.exports = User;




const TravelPlanSchema = new mongoose.Schema({


    userID: mongoose.Schema.Types.ObjectId,
    // this connects the travel plan to a SPECIFIC USER

    destination: {
        type: String,
        required: [true, "destination is required"],
        minLength: [3, "Min destination length is 3 characters."],
        maxLength: [30, "Max destination length is 30 characters"]

    },
    description: {
        type: String,
        required: [true, "description is required"],
        minLength: [3, "Min destination length is 3 characters."],
        maxLength: [1000, "Max destination length is 1000 characters"]
    },
    dateFrom: {
        type: String,
        required: [true, "description is required"],
        minLength: [3, "Min travelDateFrom length is 3 characters."],
        maxLength: [100, "Max travelDateFrom length is 100 characters"]
    },
    dateTo: {
        type: String,
        required: [true, "description is required"],
        minLength: [3, "Min travelDateTo length is 3 characters."],
        maxLength: [100, "Max travelDateTo length is 100 characters"]
    },

    usersJoining: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    userName: String

})


const TravelPlan = mongoose.model("TravelPlan", TravelPlanSchema)





module.exports = { TravelPlan, User };