import { ITarea } from '../../repositories/taskRepo';

class Tarea implements ITarea {
  id: number;
  titulo: string;
  descripcion: string;
  constructor(id: number, titulo: string, descripcion: string) {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
  }
  public getId(): number {
    return this.id;
  }
  public getTitulo(): string {
    return this.titulo;
  }
  public getDescripcion(): string {
    return this.descripcion;
  }
}

describe('Tarea', () => {
  it('should create a new Tarea instance', () => {
    const tarea = new Tarea(
      1,
      'Comprar leche',
      'Ir al supermercado y comprar leche'
    );
    expect(tarea).toBeInstanceOf(Tarea);
  });

  it('should have an id, a title, and a description', () => {
    const tarea = new Tarea(
      1,
      'Comprar leche',
      'Ir al supermercado y comprar leche'
    );
    expect(tarea.id).toBe(1);
    expect(tarea.titulo).toBe('Comprar leche');
    expect(tarea.descripcion).toBe('Ir al supermercado y comprar leche');
  });

  it('should return the correct id, title, and description', () => {
    const tarea = new Tarea(
      1,
      'Comprar leche',
      'Ir al supermercado y comprar leche'
    );
    expect(tarea.getId()).toBe(1);
    expect(tarea.getTitulo()).toBe('Comprar leche');
    expect(tarea.getDescripcion()).toBe('Ir al supermercado y comprar leche');
  });
});
