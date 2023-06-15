import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CursosService } from './cursos.service';
import { Curso } from 'src/app/dashboard/pages/cursos/lista-cursos/curso.model';
import { enviroment } from 'src/environments/environments';

describe('CursosService', () => {
  let service: CursosService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CursosService],
    });
    service = TestBed.inject(CursosService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('debería obtener cursos', () => {
    const mockCursos: Curso[] = [
      { id: 1, nombre: 'Curso 1', duracion: '5 semanas', fechaInicio: '2023-01-01', fechaFin: '2023-02-05' },
      { id: 2, nombre: 'Curso 2', duracion: '3 semanas', fechaInicio: '2023-03-01', fechaFin: '2023-03-21' },
    ];

    service.obtenerCursos().subscribe((cursos) => {
      expect(cursos).toEqual(mockCursos);
    });

    const req = httpMock.expectOne(`${enviroment.apiBaseUrl}/cursos`);
    expect(req.request.method).toBe('GET');
    req.flush(mockCursos);
  });

  it('debería agregar un curso', () => {
    const nuevoCurso: Curso = { id: 3, nombre: 'Nuevo Curso', duracion: '4 semanas', fechaInicio: '2023-04-01', fechaFin: '2023-04-28' };

    service.agregarCurso(nuevoCurso).subscribe((cursos) => {
      expect(cursos).toContain(nuevoCurso);
    });

    const req = httpMock.expectOne(`${enviroment.apiBaseUrl}/cursos`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(nuevoCurso);
    req.flush([]);
  });

  it('debería eliminar un curso', () => {
    const cursoAEliminar: Curso = { id: 1, nombre: 'Curso 1', duracion: '5 semanas', fechaInicio: '2023-01-01', fechaFin: '2023-02-05' };

    service.eliminarCurso(cursoAEliminar).subscribe(() => {
      // Verificar que el curso haya sido eliminado
    });

    const req = httpMock.expectOne(`${enviroment.apiBaseUrl}/${cursoAEliminar.id}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });
});
