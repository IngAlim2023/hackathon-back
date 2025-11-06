export interface Foto {
  id?: number;
  idProducto: number;
  url: string;
}

export interface DataProducto {
  id?: number;
  nombre: string;
  idcategoria: number;
  descripcion: string;
  preciocompra: number;
  precioventa: number;
  talla: string;
  segmento: string;
  stock: number;
  fotos?: Foto[];
}