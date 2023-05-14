import db from '../db/connect.js';
import moment from "moment"

export const getEducation = (req, res) => {
    const q = "SELECT `id`, `year`, `title`, `university`, `created_at`, `updated_at` FROM education";
    db.query(q, (err, data)=>{
        if(err) return res.json(err)
        if (data.length === 0)
        {
            const responseJson = {
                "status": 200,
                "error_msg": "no data"
            }
            return res.status(200).json(responseJson)
        }
        return res.status(200).json(data)
    })
}

export const getExperience = (req, res) => {
    const q = "SELECT `id`, `year`, `position`, `company`, `description`, `created_at`, `updated_at` FROM experience";
    db.query(q, (err, data)=>{
        if(err) return res.json(err)
        if (data.length === 0)
        {
            const responseJson = {
                "status": 200,
                "error_msg": "no data"
            }
            return res.status(200).json(responseJson)
        }
        return res.status(200).json(data)
    })
}

export const getPortfolio = (req, res) => {
    const q = "SELECT `id`, `type`, `title`, `description`, `hyperlink`, `thumbnail`, `created_at`, `updated_at` FROM `portfolio`";
    db.query(q, (err, data)=>{
        if(err) return res.json(err)
        if (data.length === 0)
        {
            const responseJson = {
                "status": 200,
                "error_msg": "no data"
            }
            return res.status(200).json(responseJson)
        }
        return res.status(200).json(data)
    })
}

export const getAbout = (req, res) => {
    const q = "SELECT `id`, `title`, `text`, `created_at`, `updated_at` FROM `about`";
    db.query(q, (err, data)=>{
        if(err) return res.json(err)
        if (data.length === 0)
        {
            const responseJson = {
                "status": 200,
                "error_msg": "no data"
            }
            return res.status(200).json(responseJson)
        }
        return res.status(200).json(data)
    })
}

export const getGallery = (req, res) => {
    const q = "SELECT `id`, `image_url`, `created_at`, `updated_at` FROM `gallery`";
    db.query(q, (err, data)=>{
        if(err) return res.json(err)
        if (data.length === 0)
        {
            const responseJson = {
                "status": 200,
                "error_msg": "no data"
            }
            return res.status(200).json(responseJson)
        }
        return res.status(200).json(data)
    })
}


export const addMessage = (req, res) => {
    const q = "INSERT INTO `messages`(`name`, `email`, `phone_number`, `ip_address`, `user_agent`, `message`, `created_at`) VALUES (?)";

    const values = [
        req.body.name,
        req.body.email,
        req.body.phone_number ? req.body.phone_number : null,
        req.body.ip ? req.body.ip : null,
        req.body.ua ? req.body.ua : null,
        req.body.message,
        moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
    ]
    db.query(q, [values], (err, data)=>{
        if(err) return res.json(err)
        const responseJson = {
            "status": 200,
            "message": "success"
        }
        return res.status(200).json(responseJson)
    })
}