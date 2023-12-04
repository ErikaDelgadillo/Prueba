import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  sendEmailVerification,
  User
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) { }

  getuser(){
    return this.auth.currentUser;
  }

  register(email:string, pass:string, name:string, apellido:string)
  {
    return createUserWithEmailAndPassword(this.auth, email, pass);
  }

  loginwithcredentials(user:string, pass:string, name:string, apellido:string ){
    return signInWithEmailAndPassword(this.auth, user, pass);
  }

  loginwithgoogle()
  {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }

  logout() {
    return signOut(this.auth);
  }
}
export class UserService {
  private usuario: any = {}; 

  registrarUsuario(datos: any): void {
    this.usuario = datos;
  }

  obtenerUsuario(): any {
    return this.usuario;
  }

  editarNombreApellido(nuevoNombre: string, nuevoApellido: string): void {
    this.usuario.nombre = nuevoNombre;
    this.usuario.apellido = nuevoApellido;
  }
}
export class loginUsuario {
  private usuario: any = {}; 

  loginUsuario(datos: any): void {
    this.usuario = datos;
  }

  obtenerUsuario(): any {
    return this.usuario;
  }

  editarNombreApellido(nuevoNombre: string, nuevoApellido: string): void {
    this.usuario.nombre = nuevoNombre;
    this.usuario.apellido = nuevoApellido;
  }
}