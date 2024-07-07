import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Componentes/AutenticacionUsuario';
import styles from "../Estilos/EstPaginas/InicioSesion.module.css";
import logoImage from '../assets/logoUni.png';
import exampleImage from '../assets/LoginIma.png';

export function Login() {
  const navigate = useNavigate();
  const { user, login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (user) {
      if (user.role === 'admin') {
        navigate('/AdminDashboard');
      } else {
        navigate('/Menu');
      }
    }
  }, [user, navigate]);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (username === 'usuario' && password === '123456') {
      setError(false);
      login({ username, role: 'user' });
      console.log('Login exitoso como usuario estándar! Redirigiendo...');
      navigate('/Menu');
    } else if (username === 'admin' && password === 'admin123') {
      setError(false);
      login({ username, role: 'admin' });
      console.log('Login exitoso como administrador! Redirigiendo...');
      navigate('/AdminDashboard');
    } else if (username === 'profesor' && password === 'profesor123') {
      setError(false);
      login({ username, role: 'profesor' });
      console.log('Login exitoso como profesor! Redirigiendo...');
      navigate('/ProfesorDashboard');
    } else {
      setError(true);
      console.log('Credenciales incorrectas');
    }
  };
  
  return (
    <div className={styles["login-page"]}>
      <section className={styles["Login-Sect"]}>
        <div className={styles["image-container"]}>
          <img src={exampleImage} alt="Imagen Ejemplo" />
        </div>
        <div className={styles["login-container"]}>
          <div className={styles["logo"]}>
            <img src={logoImage} alt="Logo de la Universidad" />
            <p>UNIVERSIDAD DE INNOVACIÓN <span>TECNOLÓGICA</span></p>
          </div>
          <form onSubmit={handleSubmit} className={styles["login-form"]}>
            <div className={styles["form-group"]}>
              <label htmlFor="username">Usuario:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className={styles["form-group"]}>
              <label htmlFor="password">Contraseña:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className={styles["error-message"]}>Credenciales incorrectas. Inténtalo de nuevo.</p>}
            <div className={styles["forgot-password"]}>
              <a href="#">Olvido Contraseña?</a>
            </div>
            <button type="submit" className={styles["login-button"]}>Log In</button>
          </form>
        </div>
      </section>
    </div>
  );
}
