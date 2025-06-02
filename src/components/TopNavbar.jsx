import React from 'react';
import './TopNavbar.css';

export default function TopNavbar({ toggleSidebar, isSidebarOpen, hamburgerButtonRef }) { // Recibir isSidebarOpen y hamburgerButtonRef como props
  return (
    <nav className="top-navbar">
      <button ref={hamburgerButtonRef} className="hamburger-button" onClick={toggleSidebar}> {/* Asignar la referencia al botón */}
        {isSidebarOpen ? 'X' : '☰'} {/* Cambiar el texto del botón basado en isSidebarOpen */}
      </button>
    </nav>
  );
}