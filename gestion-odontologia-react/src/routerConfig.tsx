import React from "react";
import { AñadirHistorial, HistorialPaciente, Home, Login, Registro, RegistroCitas, RegistroPaciente, Pagos, Informe, MostrarUsuarios, Perfil, LoginAdministrador } from "./pages";
import Administracion from "./components/admin/administracion";

export const routes = [
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/login-admin',
        element: <LoginAdministrador/>
    },
    {
        path: '/registro',
        element: <Registro/>
    },
    {
        path: '/registro-paciente',
        element: <RegistroPaciente/>
    },
    {
        path: '/historial-paciente',
        element: <HistorialPaciente/>
    },
    {
        path: '/añadir-historial',
        element: <AñadirHistorial/>
    },
    {
        path: '/registro-citas',
        element: <RegistroCitas/>
    },
    {
        path: '/pagos',
        element: <Pagos/>
    },
    {
        path: '/informe',
        element: <Informe/>
    },
    // {
    //     path: 'administrar-usuarios',
    //     element: <AdministrarUsuarios/>
    // },
    {
        path: 'mostrar-usuarios',
        element: <MostrarUsuarios/>
    },
    {
        path: 'perfil',
        element: <Perfil/>
    },
    {
        path: 'administracion',
        element: <Administracion/>
    },
]