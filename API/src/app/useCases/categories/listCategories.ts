import { Request, Response } from 'express';

import { Category } from '../../models/Category';

export async function listCategories(_req: Request, res: Response) {
  try {
    const categories = await Category.find();

    res.status(200).json(categories);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }

}
