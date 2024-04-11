import mongoose from 'mongoose';
import { userModel, stackModel, languageModel } from '@/app/_server/models';

// const Schema = mongoose.Schema;

mongoose.connect(process.env.MONGODB_URI!)
.then(() => console.log("Coder's Den database connected!"))
.catch((err) => console.log(`Error connecting to Coder's Den database! `, err));


mongoose.set("strictQuery", false);
mongoose.Promise = global.Promise;

export const db: any = {};

db.mongoose = mongoose;
db.User = userModel();
db.Stack = stackModel();
db.Language = languageModel();
