import React, { useState, useEffect } from 'react';
import styles from "../Estilos/EstPaginas/PensumCarreraViewer.module.css";
import Header from '../Componentes/Header';
import Sidebar from '../Componentes/Sidebar2';

export function PensumCarreraViewer  ()  {
    const [materias, setMaterias] = useState([]);

    useEffect(() => {
        // Simulación de carga de datos desde una API
        const mockFetchMaterias = () => {
          // Datos simulados de materias con tipo 'Teoría' o 'Laboratorio'
          const data = [
              { codigo: 'DG101', nombre: 'Diseño Gráfico Avanzado', tipo: 'Teoría', creditos: 3, area: 'Artes Visuales' },
              { codigo: 'DG202', nombre: 'Fotografía Digital', tipo: 'Laboratorio', creditos: 4, area: 'Artes Visuales' },
              { codigo: 'DG303', nombre: 'Teoría del Color', tipo: 'Teoría', creditos: 3, area: 'Artes Visuales' },
              { codigo: 'DG404', nombre: 'Tipografía', tipo: 'Laboratorio', creditos: 4, area: 'Artes Visuales' },
              { codigo: 'DG505', nombre: 'Diseño Editorial', tipo: 'Teoría', creditos: 3, area: 'Artes Visuales' },
              { codigo: 'DG606', nombre: 'Ilustración Digital', tipo: 'Laboratorio', creditos: 4, area: 'Artes Visuales' },
              { codigo: 'DG707', nombre: 'Historia del Arte', tipo: 'Teoría', creditos: 3, area: 'Artes Visuales' },
              { codigo: 'DG808', nombre: 'Producción Gráfica', tipo: 'Laboratorio', creditos: 4, area: 'Artes Visuales' },
              { codigo: 'DG909', nombre: 'Animación 3D', tipo: 'Laboratorio', creditos: 4, area: 'Artes Visuales' },
              { codigo: 'DG1010', nombre: 'Dibujo Artístico', tipo: 'Teoría', creditos: 3, area: 'Artes Visuales' },
              { codigo: 'DG1111', nombre: 'Composición Visual', tipo: 'Teoría', creditos: 3, area: 'Artes Visuales' },
              { codigo: 'DG1212', nombre: 'Arquitectura de la Información', tipo: 'Laboratorio', creditos: 4, area: 'Artes Visuales' },
          ];
          setMaterias(data);
      };

        mockFetchMaterias(); // Llamada a la función para cargar materias (simulado)
    }, []);

    return (
        <div className={styles.pensumCarrera}>
          <Header/>
          <Sidebar/>
            <h1 className={styles.mainTitle}>Pensum Carrera</h1>
            <h2 className={styles.sectionTitle}>Materias de Diseño Gráfico</h2>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nombre</th>
                        <th>Tipo</th>
                        <th>Créditos</th>
                        <th>Área Académica</th>
                    </tr>
                </thead>
                <tbody>
                    {materias.map(materia => (
                        <tr key={materia.codigo}>
                            <td>{materia.codigo}</td>
                            <td>{materia.nombre}</td>
                            <td>{materia.tipo}</td>
                            <td>{materia.creditos}</td>
                            <td>{materia.area}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PensumCarreraViewer;
