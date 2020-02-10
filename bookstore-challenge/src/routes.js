import { Router } from 'express';

import UserController from './app/controllers/UserController';
import BookController from './app/controllers/BookController';
import BookingController from './app/controllers/BookingController';
import RentingController from './app/controllers/RentingController';

const routes = new Router();

// users
routes.post('/users', UserController.store);
routes.get('/users', UserController.index);
routes.put('/users/:id', UserController.update);
routes.delete('/users/:id', UserController.delete)

// books
routes.post('/books', BookController.store);
routes.get('/books', BookController.index);
routes.put('/books/:id', BookController.update);
routes.delete('/books/:id', BookController.delete);

// booking (aluguel)
routes.post('/booking', BookingController.store);

// renting (reserva)
routes.post('/renting', RentingController.store);

export default routes;