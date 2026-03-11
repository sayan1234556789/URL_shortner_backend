import { nanoid } from "nanoid";
import Url from "../models/Url.models.js";

export const createShortUrl = async(req, res) => {
    try {
        let {originalUrl} = req.query
        
        if(!originalUrl.startsWith("http")){
            originalUrl = "https://" + originalUrl
        }
        const existingUrl = await Url.findOne({originalUrl});

        if(existingUrl){
            return res.status(200).json({
            shortUrl : `${process.env.BASE_URL}/${existingUrl.shortCode}`
        })
        }

        const shortCode = nanoid(6)

        await Url.create({
            originalUrl,
            shortCode
        })

        res.status(200).json({
            shortUrl : `${process.env.BASE_URL}/${shortCode}`
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export const redirectUrl = async(req, res) => {
    try {
        const { shortCode } = req.params

        const url = await Url.findOne({shortCode})

        if(!url) {
           return res.status(404).json({message: "URL not found"});
        }
        
        url.clicks++;
        await url.save()

        res.redirect(url.originalUrl)  
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}