import React, { useState, useEffect } from 'react'
import './section.css';
import {UserCard} from '../UserCard/UserCard';

export const Sectionn = () => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Función para buscar usuarios
  const searchUsers = () => {
    setIsLoading(true);
    setError(null);
    
    fetch(`https://dummyjson.com/users/search?q=${searchTerm}`)
      .then(res => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then(data => {
        setUsers(data.users);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      });
  };

  // Opción 1: Búsqueda al hacer submit
  const handleSubmit = (e) => {
    e.preventDefault();
    searchUsers();
  };

  // Opción 2: Búsqueda en tiempo real (con debounce)
  useEffect(() => {
    if (searchTerm.trim() === '') {
      // Si el campo de búsqueda está vacío, carga todos los usuarios
      fetch('https://dummyjson.com/users')
        .then(res => res.json())
        .then(data => setUsers(data.users));
      return;
    }

    const timerId = setTimeout(() => {
      searchUsers();
    }, 500); // Espera 500ms después de que el usuario deja de escribir

    return () => clearTimeout(timerId);
  }, [searchTerm]);

  return (
    

  <div className="section-container">
    
    
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Buscar usuarios..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit">Buscar</button>
    </form>

    {isLoading && <p className="loading-message">Cargando...</p>}
    {error && <p className="error-message">Error: {error}</p>}

    <div className="users-grid">
      {users.length > 0 ? (
        users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))
      ) : (
        !isLoading && <p className="no-results">No se encontraron usuarios</p>
      )}
    </div>
  </div>
);
};