import React, { useState, useEffect } from 'react';
import api from './services/api';

import './global.css';
import './App.css';
import './Main.css';

// Import Components
import UserForm from './components/UserForm';
import UserCard from './components/UserCard';
import BookForm from './components/BookForm';
import BookCard from './components/BookCard';

function App() {
  document.title = 'Bookstore Challenge Digivox'

  const [users, setUsers] = useState([]);
  const [books, setBooks] = useState([]);

  // useEFX
  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/users');

      setUsers(response.data);

    }

    loadUsers();
  }, []);

  useEffect(() => {
    async function loadBooks() {
      const response = await api.get('/books');

      setBooks(response.data);

    }

    loadBooks();
  }, []);

  // Functions
  // Adicionar cliente
  async function handleSubmit(data) {
    const response = await api.post('/users', data);

    setUsers([...users, response.data]);
  }

  // Adicionar livro
  async function handleBookSubmit(data) {
    const response = await api.post('/books', data);

    setBooks([...books, response.data]);
  }

  // Return
  return (
    <div id="app">

      <aside>
        <strong>Cadastrar Cliente</strong>
        <UserForm onSubmit={handleSubmit} />

        <strong>Cadastrar Livros</strong>
        <BookForm onSubmit={handleBookSubmit} />
      </aside>

      <main>
        <ul>
          {users.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </ul>

        <ul>
          {books.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </ul>
      </main>

    </div>
  );
}

export default App;
