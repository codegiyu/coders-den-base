import mongoose from "mongoose";

function stackModel () {
    const stackSchema = new mongoose.Schema({
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        proficiency: {
            type: String,
            enum: ["Novice", "Beginner", "Intermediate", "Advanced", "Master"],
            default: "Novice",
            required: true
        }
    }, {
        timestamps: true,
        version: false
    });

    stackSchema.set('toJSON', {
        virtuals: true,
        versionKey: true
    });

    return mongoose.models.User || mongoose.model('Stack', stackSchema);
}

export {
    stackModel
}