const { render, screen } = require("@testing-library/react");
const { MemoryRouter } = require("react-router-dom");
import { AuthContext } from '../../src/auth/context/AuthContext'
import { AppRouter } from '../../src/routes/AppRouter'

describe('hacer pruebas con el AppRouter', () => {
    
    test('prueba 1', () => {
        const contextValue = { login: false }

        render(
            <MemoryRouter initialEntries={'/dc'}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter/>
                </AuthContext.Provider>
            </MemoryRouter>
        )
        screen.debug()
    });
    
});
