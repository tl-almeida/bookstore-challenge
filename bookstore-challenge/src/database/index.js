import Sequelize from 'sequelize';

// import dos models
import User from '../app/models/User';
import Book from '../app/models/Book';
import Booking from '../app/models/Booking';
import Rentings from '../app/models/Renting';

import databaseConfig from '../config/database';

const models = [User, Book, Booking, Rentings];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);

        models.map(model => model.init(this.connection));
    }
}

export default new Database();