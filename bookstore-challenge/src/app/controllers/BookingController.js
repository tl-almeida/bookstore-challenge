import Booking from '../models/Booking';
import Book from '../models/Book';

class BookingController {
    async store(req, res) {
        const bookName = await Book.findOne({ where: { name: req.body.bookName } });

        if (!bookName) {
            return res.status(400).json({ error: 'Book dont exist' });
        }

        if (req.body.withdraw_date == null) {
            req.body.withdraw_date = new Date();
        }

        const booking = await Booking.create(req.body);

        return res.json(booking);
    }
}

export default new BookingController();