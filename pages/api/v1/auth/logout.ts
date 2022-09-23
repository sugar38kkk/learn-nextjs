import { NextApiRequest, NextApiResponse } from 'next';
import Cookies from 'cookies';



export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST'){
    return res.status(400).json({message: 'method not support'})
  }

  const cookies = new Cookies(req, res)

  cookies.set('token')

  res.status(200).json({message:'logout successfully'})
}
