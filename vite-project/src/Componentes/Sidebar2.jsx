import React, { useState } from 'react';
import '../Estilos/Sidebar.css'; // Asegúrate de que la ruta sea correcta
import logoImage from '../assets/logoUni.png'; // Ajusta la ruta según la ubicación real de tus imágenes
import { Link, useNavigate } from 'react-router-dom';
import LogoutModal from '../Componentes/VentanaLogOut'; // Importar el componente del modal

const SidebarItem = ({ icon, text, to, isActive = false, onClick }) => (
  <Link to={to} className={`sidebar-item ${isActive ? 'active' : ''}`} onClick={onClick}>
    <img loading="lazy" src={icon} className="sidebar-item-icon" alt="" />
    <div className="sidebar-item-text">{text}</div>
  </Link>
);

const Sidebar = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();

  const handleLogoutClick = (e) => {
    e.preventDefault();
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleConfirmLogout = () => {
    setModalVisible(false);
    navigate('/logout'); // Redirige al usuario a la ruta de logout
  };

  return (
    <>
      <aside className="sidebar">
        <nav className="sidebar-nav">
          <img loading="lazy" src={logoImage} className="sidebar-logo" alt="Logo" />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ffb73d9899b17781ffac437db811d6f659136ecabaaad3f305769b7fae1e11b?apiKey=729dc09cd15c473da7916659c4854519&" className="sidebar-divider" alt="" />
          <SidebarItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/6a812ed63d89ab65b3067df4fb476d1802ed9e33b87ab2e02774bc7160f1ddf3?apiKey=729dc09cd15c473da7916659c4854519&" text="Dashboard" to="/Menu" isActive={true} />
          
          <div className="sidebar-section">
            <h2 className="sidebar-section-title">ACADEMIC</h2>
            <SidebarItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/7a26fafeb4a6624d9037e579936f0a47d9eb64f8dfef241ec94cb5772681e905?apiKey=729dc09cd15c473da7916659c4854519&" text="Calendario academico" to="/calendario" />
            <SidebarItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/f0324d01f8677df18c7ac2ee1f4378e9edfab3672350ddcef5bb0cf161d5c053?apiKey=729dc09cd15c473da7916659c4854519&" text="Reporte de calificaciones" to="/reporte-calificaciones" />
            <SidebarItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/bf818e7e50cc09b3da92c16660dd391e8226cdc76995221c123c0aafc6cbbbcf?apiKey=729dc09cd15c473da7916659c4854519&" text="Horario" to="/horario" />
            <SidebarItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/fbaf764739bed9f4adb54b5e0753a535425dd0492e49badacb3031d1f3a5e0ed?apiKey=729dc09cd15c473da7916659c4854519&" text="Pensum de carrera" to="/pensum-carrera" />
            <h2 className="sidebar-section-title mt-40 max-md:mt-10">Caja</h2>
            <SidebarItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/144a5cdc3d5121775bc14e154fc334ea376b30cc50a9e6dc4f17f3268b5324be?apiKey=729dc09cd15c473da7916659c4854519&" text="Cuenta por pagar" to="/cuenta-por-pagar" />
            <SidebarItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/318b9ece01d5699a4dde5dfb300b6129d17e55cc546ce074a3fd7e5e3eb693d0?apiKey=729dc09cd15c473da7916659c4854519&" text="Hoja de pago" to="/HojaPago" />
            <h2 className="sidebar-section-title mt-16 max-md:mt-10">Configuración</h2>
            <SidebarItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/1f232d4efed64b8abc429ee0b51c66cfc3489b87ef2a2ae5d6a225aca07b4f95?apiKey=729dc09cd15c473da7916659c4854519&" text="Configuraciones de la cuenta"  />
            <SidebarItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/b6113ee9ca88d31becd19326d889da793c34d47074112926e65dd031fa456fcb?apiKey=729dc09cd15c473da7916659c4854519&" text="Preferencias de notificaciones"  />
            <SidebarItem icon="https://cdn.builder.io/api/v1/image/assets/TEMP/9104e80a1919c81007c1b02275b427525b5332106a38a90b750e326be1ebca67?apiKey=729dc09cd15c473da7916659c4854519&" text="Logout" to="#" onClick={handleLogoutClick} />
          </div>
        </nav>
      </aside>
      <LogoutModal isVisible={isModalVisible} onClose={handleCloseModal} onConfirm={handleConfirmLogout} />
    </>
  );
};

export default Sidebar;
