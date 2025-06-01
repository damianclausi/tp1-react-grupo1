import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Sidebar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [open, setOpen] = useState(false);

  // Escuchar cambios de tamaño de ventana
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) {
        setOpen(true); // siempre abierto en desktop
      } else {
        setOpen(false); // cerrado en mobile por defecto
      }
    };

    handleResize(); // configurar en primer render
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Botón hamburguesa solo en móvil */}
      {isMobile && (
        <button
          onClick={() => setOpen(!open)}
          style={{
            position: "fixed",
            top: "1rem",
            left: "1rem",
            zIndex: 1000,
            background: "transparent",
            border: "none",
            fontSize: "2rem",
            color: "white",
            cursor: "pointer",
          }}
        >
          ☰
        </button>
      )}

      {/* Sidebar */}
      <div
        style={{
          width: open ? "15rem" : isMobile ? "0" : "15rem",
          backgroundColor: "rgb(91, 59, 206)",
          padding: open ? "2rem" : isMobile ? "0" : "2rem",
          borderRadius: "0 20px 20px 0",
          overflow: "hidden",
          transition: "width 0.3s ease, padding 0.3s ease",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 999,
        }}
      >
        {open && (
          <>
            <h3 style={{ textAlign: "center" }}>
            <svg
          style={{ width: "7rem", height: "7rem" , margin: "0 auto"}}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              opacity="0.5"
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              fill="#ffffff"
            ></path>{" "}
            <path
              d="M13.4881 6.44591C13.8882 6.55311 14.1256 6.96437 14.0184 7.36447L11.4302 17.0237C11.323 17.4238 10.9117 17.6613 10.5116 17.5541C10.1115 17.4468 9.8741 17.0356 9.98131 16.6355L12.5695 6.97624C12.6767 6.57614 13.088 6.3387 13.4881 6.44591Z"
              fill="#ffffff"
            ></path>{" "}
            <path
              d="M14.9697 8.46967C15.2626 8.17678 15.7374 8.17678 16.0303 8.46967L16.2387 8.67801C16.874 9.3133 17.4038 9.84308 17.7678 10.3202C18.1521 10.8238 18.4216 11.3559 18.4216 12C18.4216 12.6441 18.1521 13.1762 17.7678 13.6798C17.4038 14.1569 16.874 14.6867 16.2387 15.322L16.0303 15.5303C15.7374 15.8232 15.2626 15.8232 14.9697 15.5303C14.6768 15.2374 14.6768 14.7626 14.9697 14.4697L15.1412 14.2981C15.8229 13.6164 16.2797 13.1574 16.5753 12.7699C16.8577 12.3998 16.9216 12.1843 16.9216 12C16.9216 11.8157 16.8577 11.6002 16.5753 11.2301C16.2797 10.8426 15.8229 10.3836 15.1412 9.70191L14.9697 9.53033C14.6768 9.23744 14.6768 8.76257 14.9697 8.46967Z"
              fill="#ffffff"
            ></path>{" "}
            <path
              d="M7.96986 8.46967C8.26275 8.17678 8.73762 8.17678 9.03052 8.46967C9.32341 8.76257 9.32341 9.23744 9.03052 9.53033L8.85894 9.70191C8.17729 10.3836 7.72052 10.8426 7.42488 11.2301C7.14245 11.6002 7.07861 11.8157 7.07861 12C7.07861 12.1843 7.14245 12.3998 7.42488 12.7699C7.72052 13.1574 8.17729 13.6164 8.85894 14.2981L9.03052 14.4697C9.32341 14.7626 9.32341 15.2374 9.03052 15.5303C8.73762 15.8232 8.26275 15.8232 7.96986 15.5303L7.76151 15.322C7.12617 14.6867 6.59638 14.1569 6.23235 13.6798C5.84811 13.1762 5.57861 12.6441 5.57861 12C5.57861 11.3559 5.84811 10.8238 6.23235 10.3202C6.59638 9.84308 7.12617 9.31331 7.76151 8.67801L7.96986 8.46967Z"
              fill="#ffffff"
            ></path>{" "}
          </g>
        </svg>
            </h3>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                color: "white",
              }}
            >
              <li><Link to="/">🏠 Inicio</Link></li>
              <li><Link to="/antonio">👨 Antonio</Link></li>
              <li><Link to="/cristian">👨 Cristian</Link></li>
              <li><Link to="/damian">👨 Damián</Link></li>
              <li><Link to="/rocio">👩 Rocío</Link></li>
              <li><Link to="/json">📄 Datos JSON</Link></li>
              <li><Link to="/api">🌐 API Pública</Link></li>
              <li><Link to="/bitacora">📝 Bitácora</Link></li>
            </ul>
          </>
        )}
      </div>
    </>
  );
}
