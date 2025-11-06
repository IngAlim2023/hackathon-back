export interface DataDetalleVenta {
  idproducto: number
  cantidadproducto: number
  subtotal: number
}

export interface DataVenta {
  idcliente: number
  idempleado: number
  total: number
  detalles: DataDetalleVenta[]
}
