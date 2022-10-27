import { Types } from "../../../src/auth/types/types";

describe('pruebas del archivo "types.js"', () => {
    test ('debe regresar los types', () => {
        expect(Types).toEqual({
            login: '[Auth] login',
            logout: '[Auth] logout'
        })
    })
});
