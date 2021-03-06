import Sequelize, { Model } from 'sequelize';

class Renting extends Model {
    static init(sequelize) {
        super.init({
            bookName: Sequelize.STRING,
            withdraw_date: Sequelize.DATE,
            delivery_date: Sequelize.DATE,
        }, {
            sequelize,
        });
    }
}

export default Renting;