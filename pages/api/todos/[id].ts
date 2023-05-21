import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { getTodoById } from './todoRepository';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse<Todo | Todo[] | void | object>) => {
    if (req.method === "GET") {
        if (req.query.id) {
            const todo = await getTodoById(Number(req.query.id));
            if (todo) {
                res.status(200).json(todo);
            } else {
                res.status(404).json({ message: "Todo not found" });
            }
        }
    }
}

export default handler;
