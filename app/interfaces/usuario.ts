export interface UsuarioData {
  id?: number;
  nombres: string;
  apellidos: string;
  fechanacimiento: Date;
  password?: string;
  email: string;
  documento: string;
  genero: string;
  tipodocumento:string
  
  // llaves foraneas
  idrol: number;
}