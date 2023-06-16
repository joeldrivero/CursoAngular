import { createAction, props } from '@ngrx/store';
import { LoginFormValue } from '../../auth/pages/auth.service';
import { Usuario } from '../../core/models/usuario.model';

export const login = createAction(
  '[Login] User Login',
  props<{ loginFormValue: LoginFormValue }>()
);

export const loginSuccess = createAction(
  '[Login] Login Success',
  props<{ user: Usuario }>()
);

export const loginFailure = createAction('[Login] Login Failure');

export const logout = createAction('[Login] User Logout');
