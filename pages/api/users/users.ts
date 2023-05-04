import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";
import { User } from "../../../interfaces/user";
import { getUsers, getUserById, createUser, updateUser, deleteUser } from "../../../repositories/userRepository";

const handler: NextApiHandler = async (req: NextApiRequest, res: NextApiResponse<User | User[] | void | object>) => {
    switch (req.method) {
        case "GET":
            if (req.query.id) {
                const user = await getUserById(Number(req.query.id));
                if (user) {
                    res.status(200).json(user);
                } else {
                    res.status(404).json({ message: "User not found" });
                }
            } else {
                const users = await getUsers();
                res.status(200).json(users);
            }
            break;

        case "POST":
            const createdUser = await createUser(req.body);
            res.status(201).json(createdUser);
            break;

        case "PUT":
            const updatedUser = await updateUser(Number(req.query.id), req.body);
            res.status(200).json(updatedUser);
            break;

        case "DELETE":
            await deleteUser(Number(req.query.id));
            res.status(204).json({ message: "User deleted successfully" });
            break;

        default:
            res.status(405).json({ message: "Method not allowed" });
            break;
    }
};

export default handler;
