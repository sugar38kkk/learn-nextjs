import { NextApiRequest, NextApiResponse } from 'next';
import httpProxy, { ProxyResCallback } from 'http-proxy';
import Cookies from 'cookies';

export const config = {
  api: {
    bodyParser: false,
  },
};

const proxy = httpProxy.createProxyServer({});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  return new Promise((resolve) => {
    req.headers.cookie = '';

    const handleLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
      let body = '';
      proxyRes.on('data', function (chunk) {
        body += chunk;
      });
      proxyRes.on('end', function () {
        // console.log('res from proxied server:', body);
        try {
          const response = JSON.parse(body);
          if (!response?.data) {
            (res as NextApiResponse)
              .status(response?.status_code)
              .json({ message: response?.message });
          }

          const {
            data: { token, expiry },
          } = response;


          const cookies = new Cookies(req, res, { secure: process.env.NODE_ENV !== 'development' });

          cookies.set('token', token, {
            httpOnly: true,
            sameSite: 'lax',
            maxAge: expiry * 1000
          });
          
          
          ;(res as NextApiResponse)
            .status(200)
            .json({ message: 'login successfully' });
        } catch (error) {
          (res as NextApiResponse).status(200).json({ message: 'something went wrong' });
        }
        resolve(true);
      });
    };

    proxy.once('proxyRes', handleLoginResponse);

    proxy.web(req, res, {
      target: process.env.API_URL,
      changeOrigin: true,
      selfHandleResponse: true,
    });
  });
}
