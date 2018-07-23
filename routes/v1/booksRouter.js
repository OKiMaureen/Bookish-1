import { Router } from 'express';
import BooksController from '../../controllers/BooksController';
import Validator from '../../validators/Validator';


const booksRouter = Router();

// Already has /api/v1/books appended to the route
booksRouter.post('/', Validator.validateBook, BooksController.createBook);
booksRouter.get('/', BooksController.getAllBooks);
booksRouter.get('/:bookId', BooksController.getOneBook);
booksRouter.put('/:bookId', Validator.validateBook, BooksController.updatateBook);
booksRouter.delete('/:bookId', BooksController.deleteBook);


export default booksRouter;
