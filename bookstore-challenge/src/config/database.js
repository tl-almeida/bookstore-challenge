module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'digivox',
    database: 'bookstore',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    }
}