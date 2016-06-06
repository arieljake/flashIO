import dotenv from 'dotenv';
dotenv.config();

export const HOST = process.env.HOST;
export const PORT = process.env.PORT;
export const NODE_ENV = process.env.NODE_ENV;
export const isDev = NODE_ENV === 'development';
export const isLive = NODE_ENV === 'production';
