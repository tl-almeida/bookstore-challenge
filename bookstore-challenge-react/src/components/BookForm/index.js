import React, { useState } from 'react';

function BookForm({ onSubmit }) {
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');

    async function handAddBook(e) {
        e.preventDefault();

        await onSubmit({
            name,
            quantity
        });

        setName('');
        setQuantity('');
    }

    return (
        <form onSubmit={handAddBook}>
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
                <label htmlFor="email">Quantidade</label>
                <input
                    name="quantity"
                    id="quantity"
                    required
                    value={quantity}
                    onChange={e => setQuantity(e.target.value)}
                />
            </div>
            <button type="submit">Cadastrar</button>
        </form>
    );
}

export default BookForm;