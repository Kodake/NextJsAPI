import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { getTodos } from './todoRepository';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse<Todo | Todo[] | void | object>) => {
  if (req.method === "GET") {
    const todos = await getTodos();
    res.status(200).json(todos);
  }
}

export default handler;
