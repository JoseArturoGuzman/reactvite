import React, { useState, useEffect } from 'react';
import styles from '../Estilos/EstPaginas/EstudianteAgregarRetirar.module.css';
import Header from '../Componentes/Header';
import Sidebar from '../Componentes/Sidebar2';

export function EstudianteRetirarMaterias() {
  const [area, setArea] = useState('Humanidades');
  const [searchTerm, setSearchTerm] = useState('');
  const [materias, setMaterias] = useState([
    { id: 1, nombre: 'Filosofía', creditos: 20, seccion: 20, profesor: 20, horario: 20, seleccionada: false },
    { id: 2, nombre: 'Literatura', creditos: 20, seccion: 20, profesor: 20, horario: 20, seleccionada: false },
    { id: 3, nombre: 'Historia', creditos: 20, seccion: 20, profesor: 20, horario: 20, seleccionada: false },
    { id: 4, nombre: 'Arte', creditos: 20, seccion: 20, profesor: 20, horario: 20, seleccionada: false },
    { id: 5, nombre: 'Ética', creditos: 20, seccion: 20, profesor: 20, horario: 20, seleccionada: false },
    { id: 6, nombre: 'Sociología', creditos: 20, seccion: 20, profesor: 20, horario: 20, seleccionada: false },
    { id: 7, nombre: 'Psicología', creditos: 20, seccion: 20, profesor: 20, horario: 20, seleccionada: false },
    { id: 8, nombre: 'Antropología', creditos: 20, seccion: 20, profesor: 20, horario: 20, seleccionada: false },
  ]);
  const [filteredMaterias, setFilteredMaterias] = useState(materias);
  const [message, setMessage] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [materiasToRemove, setMateriasToRemove] = useState([]);

  useEffect(() => {
    const filtered = materias.filter(materia =>
      materia.nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredMaterias(filtered);
  }, [searchTerm, materias]);

  const handleCheckboxChange = (id) => {
    setMaterias(materias.map(materia =>
      materia.id === id ? { ...materia, seleccionada: !materia.seleccionada } : materia
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedMaterias = materias.filter(m => m.seleccionada);
    if (selectedMaterias.length > 0) {
      setMateriasToRemove(selectedMaterias);
      setShowAlert(true);
    } else {
      setMessage('Por favor, selecciona al menos una materia para retirar');
      setTimeout(() => setMessage(''), 3000);
    }
  };

  const handleConfirmRemove = () => {
    setMaterias(materias.filter(materia => !materia.seleccionada));
    setMessage('Materias retiradas exitosamente');
    setTimeout(() => setMessage(''), 3000);
    setShowAlert(false);
  };

  const handleCancelRemove = () => {
    setShowAlert(false);
  };

  return (
    <div className={styles.retirarMaterias}>
        <Header/>
        <Sidebar/>
      <h1 className={styles.title}>
        <span className={styles.icon}>📚</span>
        Retirar Materias
      </h1>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.filters}>
          <div className={styles.selectWrapper}>
            <label htmlFor="area">Área:</label>
            <select
              id="area"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              className={styles.select}
            >
              <option value="Humanidades">Humanidades</option>
              <option value="Ciencias">Ciencias</option>
              <option value="Ingeniería">Ingeniería</option>
            </select>
          </div>
          <div className={styles.searchWrapper}>
            <label htmlFor="materia">Materia:</label>
            <input
              type="text"
              id="materia"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={styles.searchInput}
              placeholder="Buscar materia..."
            />
          </div>
          <button type="submit" className={styles.removeButton}>
            Retirar materias
          </button>
        </div>
        {message && <div className={styles.message}>{message}</div>}
        <table className={styles.table}>
          <thead>
            <tr>
              <th></th>
              <th>Materias</th>
              <th>Créditos</th>
              <th>Sección</th>
              <th>Profesor</th>
              <th>Horario</th>
            </tr>
          </thead>
          <tbody>
            {filteredMaterias.map((materia) => (
              <tr key={materia.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={materia.seleccionada}
                    onChange={() => handleCheckboxChange(materia.id)}
                  />
                </td>
                <td>{materia.nombre}</td>
                <td>{materia.creditos}</td>
                <td>{materia.seccion}</td>
                <td>{materia.profesor}</td>
                <td>{materia.horario}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </form>
      {showAlert && (
        <div className={styles.alertOverlay}>
          <div className={styles.alertBox}>
            <p>¿Estás seguro de que quieres retirar estas materias?</p>
            <div className={styles.alertButtons}>
              <button onClick={handleConfirmRemove} className={styles.confirmButton}>Sí, retirar</button>
              <button onClick={handleCancelRemove} className={styles.cancelButton}>Cancelar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}