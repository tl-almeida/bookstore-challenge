import React from 'react';

function userCard({ user }) {
    return (
        <li className="user-card">
            <div className="user-name">
                <strong>{user.name}</strong>
                <span> {user.email}</span>
            </div>
        </li>
    )
}

export default userCard;