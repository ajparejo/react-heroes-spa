import { render, screen } from "@testing-library/react";
import { AuthContext } from "../../../src/auth";

describe('Pruebas en el Navbar', () => { 
    test('obtener el nombre del usuario', () => {
        const contextValue = {name: 'Luis'}

        render(
            <MemoryRouter initialEntries={'/dc'}>
                <AuthContext.Provider value={contextValue}></AuthContext.Provider>
            </MemoryRouter>
        );

        screen.debug();
    });

    test('debe reaccionar con el botón de logout', () => {
        //prueba
    });
    
    
 })