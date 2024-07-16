import React from 'react';
import Home from '../components/home/Home'


export { Home }

export const Login = React.lazy(() => import('../components/login/Login'));
export const LoginAdministrador = React.lazy(() => import('../components/login/LoginAdministrador'));
export const Registro = React.lazy(() => import('../components/registro/Registro'));
export const RegistroPaciente = React.lazy(() => import('../components/admin/RegistroPaciente'));
export const HistorialPaciente = React.lazy(() => import('../components/admin/HistorialPaciente'));
export const AñadirHistorial = React.lazy(() => import('../components/admin/AñadirHistorial'));
export const RegistroCitas = React.lazy(() => import('../components/usuario/RegistroCitas'));
export const Pagos = React.lazy(() => import('../components/admin/Pagos'));
export const Informe = React.lazy(() => import('../components/admin/Informe'));
// export const AdministrarUsuarios = React.lazy(() => import('../components/admin/AdministrarUsuarios'));
export const MostrarUsuarios = React.lazy(()=> import('../components/admin/MostrarUsuarios'))
export const Perfil = React.lazy(() => import('../components/usuario/Perfil'));
export const administracion = React.lazy(() => import('../components/admin/administracion'));