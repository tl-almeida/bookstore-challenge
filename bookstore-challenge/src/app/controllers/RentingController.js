import Renting from '../models/Renting';
import Book from '../models/Book';

class RentingController {
    async store(req, res) {
        const bookName = await Book.findOne({ where: { name: req.body.bookName } });

        if (!bookName) {
            return res.status(400).json({ error: 'Book dont exist' });
        }

        const renting = await Renting.create(req.body);

        return res.json(renting);
    }
}

export default new RentingController();