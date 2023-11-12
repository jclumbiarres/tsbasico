export class Tarea {
  id: number;
  titulo: string;
  descripcion: string;
  constructor(id: number, titulo: string, descripcion: string) {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
  }
}
