import mongoose from "mongoose";

function userModel() {
    const userSchema = new mongoose.Schema({
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        email: { 
            type: String, 
            unique: true, 
            required: true 
        },
        userName: { 
            type: String, 
            unique: true, 
            required: true 
        },
        password: { 
            type: String, 
            required: true 
        },
        firstName: { 
            type: String, 
            required: true 
        },
        lastName: { 
            type: String, 
            required: true 
        },
        phone: {
            type: String,
            required: true
        },
        phoneAlt: {
            type: [String],
            required: true,
            default: ""
        },
        photo: {
            type: String,
            required: true,
            default: ""
        },
        role: {
            type: String,
            required: true,
            enum: ["Guest", "Member", "Volunteers", "Mentors", "Admin"],
            default: "Guest"
        },
        email_is_verified: {
          type: Boolean,
          default: false,
        },
        phone_is_verified: {
          type: Boolean,
          default: false,
        },
        gender: {
          type: String,
          enum: ["male", "female", "others"]
        },
        DoB: {
          type: Date,
        },
        address: {
          type: String,
          required: true, 
          default: ""
        },
        countryOfResidence: {
            type: String,
            required: true,
            default: ""
        },
        stateOfResidence: {
            type: String,
            required: true,
            default: ""
        },
        city: {
            type: String,
            required: true,
            default: ""
        },
        stack: {
            type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Stack' }],
            required: true,
            default: []
        },
        languages: {
            type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Language' }],
            required: true,
            default: []
        }
    }, {
        // add createdAt and updatedAt timestamps
        timestamps: true
    });

    userSchema.set('toJSON', {
        virtuals: true,
        versionKey: true
    });

    return mongoose.models.User || mongoose.model('User', userSchema);
}

export {
    userModel
}