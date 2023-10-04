import { Request, Response } from "express";
import fetch from 'node-fetch'

export const getBooks = async (req: Request, res: Response) => {
  const API_CLIENT = process.env.NAVER_API_KEY || '';
  const API_SECRET = process.env.NAVER_API_SECRET || '';
  console.log("API_CLIENT", API_CLIENT);
  console.log("API_SECRET", API_SECRET);

  try {
    const response = await fetch('https://openapi.naver.com/v1/search/book.xml?query=%EC%A3%BC%EC%8B%9D&display=10', {
      headers: {
        'X-Naver-Client-Id': API_CLIENT,
        'X-Naver-Client-Secret': API_SECRET
      }
    });
    console.log(response)
    res.send(response.body);
  } catch (e) {
    res.send(e);
  }
}