import React from 'react';

function bookCard({ book }) {
    return (
        <li className="book-card">
        <div className="book-name">
            <strong>{book.name}</strong>
            <span> {book.quantity}</span>
        </div>
    </li>
    )}

export default bookCard;