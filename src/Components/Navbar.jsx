import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [dropdownInstitucionalOpen, setDropdownInstitucionalOpen] = useState(false);
  const [dropdownConcejalesOpen, setDropdownConcejalesOpen] = useState(false);
  const [dropdownBloqueConcejalesOpen, setDropdownBloqueConcejalesOpen] = useState(false);
  const [dropdownOrdenanzasOpen, setDropdownOrdenanzasOpen] = useState(false);
  const [dropdownLegislativoOpen, setDropdownLegislativoOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  const toggleDropdownInstitucional = (event) => {
    event.preventDefault();
    setDropdownInstitucionalOpen(!dropdownInstitucionalOpen);
  };

  const toggleDropdownConcejales = (event) => {
    event.preventDefault();
    setDropdownConcejalesOpen(!dropdownConcejalesOpen);
    setDropdownBloqueConcejalesOpen(false);
  };

  const toggleDropdownBloqueConcejales = (event) => {
    event.preventDefault();
    setDropdownBloqueConcejalesOpen(!dropdownBloqueConcejalesOpen);
  };

  const toggleDropdownOrdenanzas = (event) => {
    event.preventDefault();
    setDropdownOrdenanzasOpen(!dropdownOrdenanzasOpen);
  };

  const toggleDropdownLegislativo = (event) => {
    event.preventDefault();
    setDropdownLegislativoOpen(!dropdownLegislativoOpen);
  };

  return (
    <header id="header" className="fixed-top">
      <div className="container d-flex align-items-center justify-content-between">
      <NavLink to="/" className="logo">
          <img
            src="/assets/img/logo/COAFormosaMunicipalidad monocromatico.png"
            alt="Logo"
            className="img-fluid"
          />
        </NavLink>
        <h1 className="logo">
          <a href="#">HCD</a>
        </h1>
        <nav
          id="navbar"
          className={`navbar ${isMobileNavOpen ? "navbar-mobile" : ""}`}
        >
          <ul>
            <li>
              <NavLink
                to="/"
                className="nav-link scrollto"
                onClick={closeMobileNav}
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/acerca"
                className="nav-link scrollto"
                onClick={closeMobileNav}
              >
                Acerca
              </NavLink>
            </li>
            <li className={`dropdown ${dropdownInstitucionalOpen ? "active" : ""}`}>
              <a
                href="#" 
                className="nav-link scrollto"
                onClick={toggleDropdownInstitucional}
              >
                Institucional <i className="bi bi-chevron-down" />
              </a>
              <ul className={`${dropdownInstitucionalOpen ? 'dropdown-active' : ''}`}>
                <li>
                  <NavLink
                    to="/institucional/autoridadesActuales"
                    className="nav-link scrollto"
                    onClick={closeMobileNav}
                  >
                    Autoridades Actuales
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/institucional/autoridadesAnteriores"
                    className="nav-link scrollto"
                    onClick={closeMobileNav}
                  >
                    Autoridades Anteriores
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/institucional/edificio"
                    className="nav-link scrollto"
                    onClick={closeMobileNav}
                  >
                    Edificio
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className={`dropdown ${dropdownConcejalesOpen ? "active" : ""}`}>
              <a href="" className="nav-link scrollto" onClick={toggleDropdownConcejales}>
                Concejales <i className="bi bi-chevron-down" />
              </a>
              <ul className={`dropdown-menu ${dropdownConcejalesOpen ? "dropdown-menu-open" : ""}`}>
                <li>
                  <NavLink
                    to="/consejales/concejales"
                    className="nav-link scrollto"
                    onClick={closeMobileNav}
                  >
                    Concejales
                  </NavLink>
                </li>
                <li className={`dropdown ${dropdownBloqueConcejalesOpen ? "active" : ""}`}>
                  <a href="" className="nav-link scrollto" onClick={toggleDropdownBloqueConcejales}>
                    Bloque de Concejales <i className="bi bi-chevron-right" />
                  </a>
                  <ul className={`dropdown ${dropdownConcejalesOpen ? "dropdown-active" : ""}`}>
                    <li>
                      <NavLink
                        to="/consejales/bloqueDeConcejales/pj"
                        className="nav-link scrollto"
                        onClick={closeMobileNav}
                      >
                        Bloque PJ
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/consejales/bloqueDeConcejales/ucr"
                        className="nav-link scrollto"
                        onClick={closeMobileNav}
                      >
                        Bloque UCR
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/consejales/bloqueDeConcejales/nuevoPais"
                        className="nav-link scrollto"
                        onClick={closeMobileNav}
                      >
                        Bloque NUEVO PAÍS
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/consejales/bloqueDeConcejales/5DeMarzo"
                        className="nav-link scrollto"
                        onClick={closeMobileNav}
                      >
                        Bloque 5 de MARZO
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/consejales/bloqueDeConcejales/pro"
                        className="nav-link scrollto"
                        onClick={closeMobileNav}
                      >
                        Bloque PRO
                      </NavLink>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>

            <li className={`dropdown ${dropdownOrdenanzasOpen ? "active" : ""}`}>
              <a href="#" className="nav-link scrollto" onClick={toggleDropdownOrdenanzas}>
                Ordenanzas <i className="bi bi-chevron-down" />
              </a>
              <ul className={`${dropdownOrdenanzasOpen ? 'dropdown-active' : ''}`}>
                <li>
                  <NavLink
                    to="/ordenanzas/ordenanzas"
                    className="nav-link scrollto"
                    onClick={closeMobileNav}
                  >
                    Ordenanzas
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/ordenanzas/resoluciones"
                    className="nav-link scrollto"
                    onClick={closeMobileNav}
                  >
                    Resoluciones
                  </NavLink>
                </li>
              </ul>
            </li>

            <li className={`dropdown ${dropdownLegislativoOpen ? "active" : ""}`}>
              <a href="#" className="nav-link scrollto" onClick={toggleDropdownLegislativo}>
                Legislativo <i className="bi bi-chevron-down" />
              </a>
              <ul className={`${dropdownLegislativoOpen ? 'dropdown-active' : ''}`}>
                <li>
                  <NavLink
                    to="/legislativo/sesionesOrdinarias"
                    className="nav-link scrollto"
                    onClick={closeMobileNav}
                  >
                    Sesiones Ordinarias
                  </NavLink>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/FormosaTuCiudad/videos/524025079814022"
                    target="_blank"
                    rel="noreferrer"
                    onClick={closeMobileNav}
                  >
                    Sesiones en Vivo
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <NavLink
                to="/contacto"
                className="nav-link scrollto"
                onClick={closeMobileNav}
              >
                Contacto
              </NavLink>
            </li>
          </ul>
          <i
            className={`bi bi-list mobile-nav-toggle ${
              isMobileNavOpen ? "bi-x" : ""
            }`}
            onClick={toggleMobileNav}
          />
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
