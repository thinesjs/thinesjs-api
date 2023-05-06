import jwt from 'jsonwebtoken';
import {} from 'dotenv/config';

export const authenticateApiKey = (req, res, next) => {
  const responseJson = {
    "status": 401,
    "error_msg": "Unauthorized Access!"
  }
  const apiKeyHeader = req.headers['x-api-key']

  if (apiKeyHeader == null) return res.status(401).json(responseJson)

  if(apiKeyHeader == process.env.API_KEY){
    next()
  }else{
    return res.status(401).json(responseJson)
  }
}