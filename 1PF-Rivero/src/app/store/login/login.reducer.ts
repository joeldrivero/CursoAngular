import { createReducer, on } from '@ngrx/store';
import { Usuario } from '../../core/models/usuario.model';
import { loginSuccess, loginFailure, logout } from './login.actions';

export interface LoginState {
  user: Usuario | null;
  isLoggedIn: boolean;
  error: string | null;
}

export const initialState: LoginState = {
  user: null,
  isLoggedIn: false,
  error: null,
};

export const loginReducer = createReducer(
  initialState,
  on(loginSuccess, (state, { user }) => {
    console.log('Login Success Action:', user);
    return {
      ...state,
      user,
      isLoggedIn: true,
      error: null,
    };
  }),
  on(loginFailure, (state) => {
    console.log('Login Failure Action');
    return {
      ...state,
      user: null,
      isLoggedIn: false,
      error: '¡Usuario y contraseña incorrectos!',
    };
  }),
  on(logout, () => {
    console.log('Logout Action');
    return initialState;
  })
);
