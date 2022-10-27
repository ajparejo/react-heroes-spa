import { authReducer } from '../../../src/auth/context/authReducer';
import { Types } from '../../../src/auth/types/types';

describe('pruebas del authReducer', () => {
    test ('debe retornar el estado por defecto', () => {
        const state = authReducer({logged: false}, {});
        expect(state).toEqual({logged: false});
    })

    test ('debe de llamar el login y autentificar', () => {
        const action = {
            type: Types.login,
            payload: {name: 'Luis'}
        }
        const state = authReducer({logged: false}, action);
        expect(state).toEqual({
            logged: true,
            user: action.payload
        })
    })
    
    test ('debe borrar el nombre del usuario y hacer logout', () => {
        const state = {
            logged: true,
            user: {name: 'Carlos'}
        }
        const action = { type: Types.logout }
        const newState = authReducer(state, action)
        expect(newState).toEqual({logged: false})
    })
});
