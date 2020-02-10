import Book from '../models/Book';

class BookController {
    // listar livros
    async index(req, res) {
        const books = await Book.findAll();
        
        return res.json(books);
    }

    // cadastrar livro
    async store(req, res) {
        const bookExists = await Book.findOne({ where: { name: req.body.name } });

        if (bookExists) {
            return res.status(400).json({ error: 'Book already exist' });
        }

        const book = await Book.create(req.body);

        return res.json(book);
    }

    // editar livro
    async update(req, res) {
        const { id } = req.params;

        const book = await Book.findByPk(id);

        const bookUpdated = await book.update(req.body);

        return res.json(bookUpdated);
    }

    // deleção livro
    async delete(req, res) {
        const { id } = req.params;

        await Book.destroy({ where: { id: id } });

        return res.json({ message: 'Book deleted' });
    }
}

export default new BookController();