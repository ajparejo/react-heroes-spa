const { render, screen } = require("@testing-library/react")
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../src/auth/context/AuthContext'
import { PublicRoutes } from '../../src/routes/PublicRoutes';

describe('Pruebas en el Public Route', () => { 
    test('mostrar el hijo', () => { 
        const contextValue = { logged: false }
        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoutes>
                    <p>prueba</p>
                </PublicRoutes>
            </AuthContext.Provider>
        );
        expect(screen.getByText('prueba')).toBeTruthy();
     })
     test('mostrar el hijo si estoy logeado', () => { 
        const contextValue = { logged: true, user: 'Luis' }
        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='login' element={
                            <PublicRoutes>
                                <p>prueba</p>
                            </PublicRoutes>
                        }></Route>
                        <Route path='dc' element={<p>otra prueba</p>}/>
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );
        screen.debug();
     })
 })