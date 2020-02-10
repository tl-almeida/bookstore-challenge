import React, { useState } from 'react';

function UserForm({ onSubmit }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    async function handAddUser(e) {
        e.preventDefault();

        await onSubmit({
            name,
            email
        });

        setName('');
        setEmail('');
    }

    return (
        <form onSubmit={handAddUser}>
            <div className="input-block">
                <label htmlFor="name">Nome</label>
                <input
                    name="name"
                    id="name"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                />
            </div>

            <div className="input-block">
                <label htmlFor="email">Email</label>
                <input
                    name="email"
                    id="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <button type="submit">Cadastrar</button>
        </form>
    );
}

export default UserForm;