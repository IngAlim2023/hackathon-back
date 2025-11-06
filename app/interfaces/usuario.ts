export interface Usuario {
  id: number;
  nombres: string;
  apellidos: string;
  fechaNacimiento: string | Date;
  password?: string;
  email: string;
  documento: string;
  genero: string;
  
  // llaves foraneas
  rolId: number;
}