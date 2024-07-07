import React, { useState, useEffect } from 'react';
import Sidebar from '../Componentes/SibarProfesor.jsx'; // Ajuste en la importación
import Header from '../Componentes/Header.jsx';
import styles from '../Estilos/EstPaginas/PublicarNota.module.css';

export function PublicarNota() {
    const [materia, setMateria] = useState('Historia');
    const [seccion, setSeccion] = useState('01');
    const [calificaciones, setCalificaciones] = useState('Medio Término');
    const [estudiantes, setEstudiantes] = useState([]);
    const [showStudents, setShowStudents] = useState(false);
    const [maxNota, setMaxNota] = useState(50);
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        handleFiltrarEstudiantes();
    }, [materia, seccion, calificaciones]);

    const calcularAlpha = (calificacion) => {
        if (calificacion >= 95) return 'A+';
        if (calificacion >= 90) return 'A';
        if (calificacion >= 85) return 'B+';
        if (calificacion >= 80) return 'B';
        if (calificacion >= 75) return 'C+';
        if (calificacion >= 70) return 'C';
        if (calificacion >= 65) return 'D+';
        if (calificacion >= 60) return 'D';
        return 'F';
    };

    const handleMedioTerminoChange = (id, value) => {
        const updatedEstudiantes = estudiantes.map(estudiante => {
            if (estudiante.id === id) {
                const califMedioTermino = Math.min(parseInt(value) || 0, maxNota);
                return {
                    ...estudiante,
                    califMedioTermino,
                    califAnterior: califMedioTermino,
                };
            }
            return estudiante;
        });
        setEstudiantes(updatedEstudiantes);
    };

    const handleCalifFinalChange = (id, value) => {
        const updatedEstudiantes = estudiantes.map(estudiante => {
            if (estudiante.id === id) {
                const califFinal = Math.min(parseInt(value) || 0, 100);
                return {
                    ...estudiante,
                    califFinal,
                    alpha: calcularAlpha(califFinal),
                };
            }
            return estudiante;
        });
        setEstudiantes(updatedEstudiantes);
    };

    const handleFiltrarEstudiantes = () => {
        const mockEstudiantes = [
            { id: '111001', nombre: 'Alejandro Muñoz', califMedioTermino: 0, califFinal: '', califAnterior: 0, alpha: '', materia: 'Historia', seccion: '01' },
            { id: '111003', nombre: 'Merna Rodriguez', califMedioTermino: 0, califFinal: '', califAnterior: 0, alpha: '', materia: 'Ciencias', seccion: '02' },
            { id: '111002', nombre: 'Carlos Mendez', califMedioTermino: 0, califFinal: '', califAnterior: 0, alpha: '', materia: 'Matematicas', seccion: '01' },
            { id: '111004', nombre: 'Maria Kenich', califMedioTermino: 0, califFinal: '', califAnterior: 0, alpha: '', materia: 'Historia', seccion: '02' },
        ];

        const filteredEstudiantes = mockEstudiantes.filter(estudiante =>
            estudiante.materia === materia && estudiante.seccion === seccion
        );

        setEstudiantes(filteredEstudiantes);
        setShowStudents(true);
    };

    const handleAgregarNotas = () => {
        console.log('Agregando notas...', estudiantes);

        setTimeout(() => {
            setSuccessMessage('Calificaciones agregadas exitosamente');
            setTimeout(() => setSuccessMessage(''), 3000);
        }, 1000);
    };

    const handleDescargar = () => {
        // Encabezados para el archivo CSV
        const csvHeaders = [
            'Nombre',
            'ID',
            calificaciones === 'Calificaciones Finales' ? 'Calif. Anterior' : 'Medio Término',
            calificaciones === 'Calificaciones Finales' ? 'Calif. Final' : '',
            calificaciones === 'Calificaciones Finales' ? 'Alpha' : '',
        ];
    
        // Generar filas de datos para el archivo CSV
        const csvRows = estudiantes.map(estudiante => [
            estudiante.nombre,
            estudiante.id,
            calificaciones === 'Calificaciones Finales' ? estudiante.califAnterior : estudiante.califMedioTermino,
            calificaciones === 'Calificaciones Finales' ? estudiante.califFinal : '',
            calificaciones === 'Calificaciones Finales' ? estudiante.alpha : '',
        ]);
    
        // Unir encabezados y filas
        const csvContent = [
            csvHeaders.join(','),
            ...csvRows.map(row => row.join(',')),
        ].join('\n');
    
        // Corregir caracteres especiales y asegurar codificación UTF-8
        const csvContentEncoded = encodeURI('data:text/csv;charset=utf-8,' + csvContent);
    
        // Crear enlace de descarga
        const link = document.createElement('a');
        link.setAttribute('href', csvContentEncoded);
        link.setAttribute('download', 'estudiantes.csv');
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    
    

    return (
        <div className={styles['publicar-nota-page']}>
            <Header />
            <div className={styles['main-content']}>
                <Sidebar />
                <div className={styles['content-area']}>
                    <h1>Reporte De Calificaciones</h1>
                    <div className={styles['filters']}>
                        <div className={styles['filter-item']}>
                            <label htmlFor="materia">Materia</label>
                            <select id="materia" value={materia} onChange={(e) => setMateria(e.target.value)}>
                                <option value="Historia">Historia</option>
                                <option value="Matematicas">Matemáticas</option>
                                <option value="Ciencias">Ciencias</option>
                            </select>
                        </div>
                        <div className={styles['filter-item']}>
                            <label htmlFor="seccion">Sección</label>
                            <select id="seccion" value={seccion} onChange={(e) => setSeccion(e.target.value)}>
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                            </select>
                        </div>
                        <div className={styles['filter-item']}>
                            <label htmlFor="calificaciones">Calificaciones</label>
                            <select id="calificaciones" value={calificaciones} onChange={(e) => setCalificaciones(e.target.value)}>
                                <option value="Medio Término">Medio Término</option>
                                <option value="Calificaciones Finales">Calificaciones Finales</option>
                            </select>
                        </div>
                        <button onClick={handleFiltrarEstudiantes} className={styles['ver-estudiantes-button']}>
                            Ver estudiantes
                        </button>
                        <button onClick={handleDescargar} className={styles['descargar-button']}>
                            Descargar
                        </button>
                    </div>
                    {showStudents && (
                        <>
                            <div className={styles['estudiantes-table']}>
                                <table>
                                    <thead>
                                        <tr>
                                            <th>Usuarios</th>
                                            <th>ID</th>
                                            {calificaciones === 'Calificaciones Finales' && (
                                                <th>Calif. Anterior</th>
                                            )}
                                            <th>{calificaciones === 'Medio Término' ? 'Medio Término' : 'Calif. Final'}</th>
                                            {calificaciones === 'Calificaciones Finales' && (
                                                <th>Alpha</th>
                                            )}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {estudiantes.map((estudiante) => (
                                            <tr key={estudiante.id}>
                                                <td>{estudiante.nombre}</td>
                                                <td>{estudiante.id}</td>
                                                {calificaciones === 'Calificaciones Finales' && (
                                                    <td>{estudiante.califAnterior}</td>
                                                )}
                                                {calificaciones === 'Medio Término' && (
                                                    <td>
                                                        <input
                                                            type="number"
                                                            value={estudiante.califMedioTermino}
                                                            onChange={(e) => {
                                                                const value = Math.min(parseInt(e.target.value) || 0, maxNota);
                                                                handleMedioTerminoChange(estudiante.id, value.toString());
                                                            }}
                                                            min="0"
                                                            max={maxNota}
                                                        />
                                                        / {maxNota}
                                                    </td>
                                                )}
                                                {calificaciones === 'Calificaciones Finales' && (
                                                    <td>
                                                        <input
                                                            type="number"
                                                            value={estudiante.califFinal}
                                                            onChange={(e) => {
                                                                const value = Math.min(parseInt(e.target.value) || 0, 100);
                                                                handleCalifFinalChange(estudiante.id, value.toString());
                                                            }}
                                                            min="0"
                                                            max="100"
                                                        />
                                                        / 100
                                                    </td>
                                                )}
                                                {calificaciones === 'Calificaciones Finales' && (
                                                    <td>{estudiante.alpha}</td>
                                                )}
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <button className={styles['agregar-notas-button']} onClick={handleAgregarNotas}>
                                Agregar notas
                            </button>
                            {successMessage && (
                                <div className={styles['success-message']}>{successMessage}</div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
