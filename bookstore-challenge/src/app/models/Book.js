import Sequelize, { Model } from 'sequelize';

class Book extends Model {
    static init(sequelize) {
        super.init({
            name: Sequelize.STRING,
            quantity: Sequelize.INTEGER,
        }, {
            sequelize,
        });
    }
}

export default Book;