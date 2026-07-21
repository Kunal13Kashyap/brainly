import mongoose, {model,Schema} from "mongoose";
import { MONGO_URL } from "./config.js";

await mongoose.connect(MONGO_URL as string);

const UserSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    password: String
})

const ContentSchema = new Schema({
    title: String,
    link: String,
    tags: [{
        type: mongoose.Types.ObjectId,
        ref: "Tag"
    }],
    type: String,
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    }
})

const LinkSchema = new Schema({
    hash: String,
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true
    }
})

const UserModel = model("User",UserSchema);
const ContentModel = model("Content",ContentSchema);
const LinkModel = model("Links",LinkSchema);

export{
    UserModel,
    ContentModel,
    LinkModel
}