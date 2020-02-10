import User from '../models/User';

class UserController {
    // listar usuários
    async index(req, res) {
        const users = await User.findAll();

        return res.json(users);
    }

    // cadastrar usuário
    async store(req, res) {
        const userExists = await User.findOne({ where: { email: req.body.email } });

        if (userExists) {
            return res.status(400).json({ error: 'User already exist' });
        }

        const user = await User.create(req.body);

        return res.json(user);
    }

    // editar usuário
    async update(req, res) {
        const { id } = req.params;

        const user = await User.findByPk(id);

        const userUpdated = await user.update(req.body);

        return res.json(userUpdated);
    }

    // deleção usuário
    async delete(req, res) {
        const { id } = req.params;

        await User.destroy({ where: { id: id } });

        return res.json({ message: 'User deleted' });
    }
}

export default new UserController();