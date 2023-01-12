import { Request, Response } from 'express';

import { Category } from '../../models/Category';

export async function changeNameCategory(req: Request, res: Response) {
  try {
    const { categoryId } = req.params;
    const { name } = req.body;

    if(!name.length) {
      return res.status(400).json({ erro: 'The name field cannot be empty' });
    }

    await Category.findByIdAndUpdate(categoryId, { name });

    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
