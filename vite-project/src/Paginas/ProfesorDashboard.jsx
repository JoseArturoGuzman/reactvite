import React from "react";
import Sidebar from "../Componentes/SibarProfesor.jsx";
import Header from "../Componentes/Header.jsx";
import styles from "../Estilos/EstPaginas/ProfesorDashboard.module.css";
import PhotoPerfil from '../assets/perfil sin foto.png';

export function ProfesorDashboard() {
    const profesorInfo = {
        nombre: "Nelson Forero",
        puesto: "Profesor",
        correo: "nelsonforero@gmail.com",
        telefono: "809-123-4567",
        fechaIngreso: "1 Septiembre 2015"
    };

    const asignaturas = [
        {
            nombre: "Liderazgo",
            codigo: "00150",
            dias: ["Lunes", "Miércoles", "Viernes"],
            hora: "9:00 am - 11:00 am",
            lugar: "Salón 101"
        },
        {
            nombre: "Matemáticas",
            codigo: "00230",
            dias: ["Martes", "Jueves"],
            hora: "10:00 am - 12:00 pm",
            lugar: "Salón 202"
        },
        {
            nombre: "Física",
            codigo: "00340",
            dias: ["Lunes", "Miércoles"],
            hora: "1:00 pm - 3:00 pm",
            lugar: "Salón 303"
        },
        {
            nombre: "Química",
            codigo: "00450",
            dias: ["Viernes"],
            hora: "8:00 am - 10:00 am",
            lugar: "Laboratorio 1"
        },
        {
            nombre: "Biología",
            codigo: "00560",
            dias: ["Martes", "Jueves"],
            hora: "2:00 pm - 4:00 pm",
            lugar: "Laboratorio 2"
        },
        {
            nombre: "Historia",
            codigo: "00670",
            dias: ["Lunes", "Miércoles", "Viernes"],
            hora: "11:00 am - 12:30 pm",
            lugar: "Salón 104"
        },
        {
            nombre: "Geografía",
            codigo: "00780",
            dias: ["Martes", "Jueves"],
            hora: "9:00 am - 10:30 am",
            lugar: "Salón 105"
        },
        // ... puedes agregar más asignaturas aquí
    ];

    return (
        <div className={styles.profesorDashboard}>
            <Sidebar />
            <div className={styles.mainContent}>
                <Header />
                <div className={styles.userInfo}>
                    <img src={PhotoPerfil} alt="Profile" className={styles.profileImage} />
                    <div className={styles.userDetails}>
                        <h2 className={styles.userProfileTitle}>Bienvenido, {profesorInfo.nombre}</h2>
                        <div className={styles.userProfileDetail}><span className={styles.userProfileDetailLabel}>Nombre:</span> {profesorInfo.nombre}</div>
                        <div className={styles.userProfileDetail}><span className={styles.userProfileDetailLabel}>Puesto:</span> {profesorInfo.puesto}</div>
                        <div className={styles.userProfileDetail}><span className={styles.userProfileDetailLabel}>Correo:</span> {profesorInfo.correo}</div>
                        <div className={styles.userProfileDetail}><span className={styles.userProfileDetailLabel}>Teléfono:</span> {profesorInfo.telefono}</div>
                        <div className={styles.userProfileDetail}><span className={styles.userProfileDetailLabel}>Fecha de Ingreso:</span> {profesorInfo.fechaIngreso}</div>
                    </div>
                </div>
                <div className={styles.dashboardContent}>
                    <div className={styles.asignaturasSection}>
                        <h2>Asignaturas Impartidas</h2>
                        <table>
                            <thead>
                                <tr>
                                    <th>Asignatura</th>
                                    <th>Código</th>
                                    <th>Días</th>
                                    <th>Hora</th>
                                    <th>Lugar</th>
                                </tr>
                            </thead>
                            <tbody>
                                {asignaturas.map((asignatura, index) => (
                                    <tr key={index}>
                                        <td>{asignatura.nombre}</td>
                                        <td>{asignatura.codigo}</td>
                                        <td>{asignatura.dias.join(", ")}</td>
                                        <td>{asignatura.hora}</td>
                                        <td>{asignatura.lugar}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
