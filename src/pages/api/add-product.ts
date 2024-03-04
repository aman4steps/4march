import connectToDatabase from '@/utils/db';
import { NextApiRequest, NextApiResponse } from 'next';

const addProduct = async (req: NextApiRequest, res: NextApiResponse) => {
    try {

        await connectToDatabase()

        const { productName } = req.body;

        if (!productName) {
            return res.status(400).json({ error: 'Product name is required' });
        }

        res.status(200).json({ message: 'Success' });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

export default addProduct;
