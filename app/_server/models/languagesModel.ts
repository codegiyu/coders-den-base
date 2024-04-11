import mongoose from "mongoose";

function languageModel () {
    const languageSchema = new mongoose.Schema({
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        name: {
            type: String,
            required: true
        }
    }, {
        timestamps: true,
        version: false
    });

    languageSchema.set('toJSON', {
        virtuals: true,
        versionKey: true
    });

    return mongoose.models.User || mongoose.model('Language', languageSchema);
}

export {
    languageModel
}