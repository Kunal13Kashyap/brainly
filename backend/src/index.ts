import express from "express"
import jwt from "jsonwebtoken"
import cors from "cors"
import { random } from "./utils.js"
import { JWT_SECRET } from "./config.js"
import { userMiddleware } from "./middleware.js"
import { UserModel, ContentModel, LinkModel } from "./db.js"

const app = express();
app.use(express.json());
app.use(cors());

app.post("/api/v1/signup", async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    try{
        await UserModel.create({
            username,
            password
        })

        res.json({
            message: "User signed up"
        })
    } catch(e){
        return res.status(411).json({
            message: "User already exists"
        })
    }
})

app.post("/api/v1/signin", async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await UserModel.findOne({
        username,
        password
    })

    if(existingUser){
        const token = jwt.sign({
            id: existingUser._id
        },JWT_SECRET as string);

        return res.json({
            token
        })
    } else{
        return res.json(403).json({
            message: "Incorrect Credentials"
        })
    }
})

app.post("/api/v1/content", userMiddleware, async(req,res)=>{
    const link = req.body.link;
    const type = req.body.type;

    await ContentModel.create({
        link,
        type,
        title: req.body.title,
        // @ts-ignore
        userId: req.userId,
        tags: []
    })
    return res.json({
        message: "Content added"
    })
})

app.get("/api/v1/content", userMiddleware, async(req,res)=>{
    // @ts-ignore
    const userId = req.userId;
    const content = await ContentModel.find({
        userId
    }).populate("userId", "username");

    return res.json({
        content
    })
})

app.delete("/api/v1/content", userMiddleware, async(req,res)=>{
    const contentId = req.body.contentId;

    await ContentModel.deleteMany({
        contentId,
        // @ts-ignore
        userId: req.userId
    })
    return res.json({
        message: "Deleted"
    })
})

app.post("/api/v1/brain/share", userMiddleware, async(req,res)=>{
    const share = req.body.share;
    if(share) {
        const existingLink = await LinkModel.findOne({
            //@ts-ignore
            userId: req.userId
        })
        if(existingLink) return res.json({
            hash: existingLink.hash
        })

        const hash = random(10);
        await LinkModel.create({
            //@ts-ignore
            userId: req.userId,
            hash
        })
        res.json({
            message: `/share/${hash}`
        })
    } else{
        await LinkModel.deleteOne({
            //@ts-ignore
            userId: req.userId
        })
        res.json({

            message: "Removed Link"
        })
    }
})

app.get("/api/v1/brain/:shareLink", async(req,res)=>{
    const hash = req.params.shareLink;

    const link = await LinkModel.findOne({
        hash
    });

    if(!link) {
        return res.status(403).json({
            message: "Incorrect Input"
        })
    }
    const content = await ContentModel.find({
        userId: link.userId
    })
    const user = await UserModel.findOne({
        _id: link.userId
    })

    if(!user){
        return res.status(411).json({
            message: "User not found, error should ideally not happen"
        })
    }

    res.json({
        username: user.username,
        content
    })
})

app.listen(3000);