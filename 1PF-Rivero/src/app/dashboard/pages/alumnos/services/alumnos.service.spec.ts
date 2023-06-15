import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { AlumnosService } from './alumnos.service';
import { Alumno } from 'src/app/dashboard/pages/alumnos/lista-alumnos/lista-alumno.model';

describe('AlumnosService', () => {
  let service: AlumnosService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AlumnosService],
    });
    service = TestBed.inject(AlumnosService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('debería obtener alumnos', () => {
    const mockAlumnos: Alumno[] = [
      { id: '1', nombre: 'Juan', apellido: 'Perez', edad: 25, email: 'juan@example.com' },
      { id: '2', nombre: 'Maria', apellido: 'Gomez', edad: 30, email: 'maria@example.com' },
    ];

    service.obtenerAlumnos().subscribe((alumnos) => {
      expect(alumnos).toEqual(mockAlumnos);
    });

    const req = httpMock.expectOne(`${service.url}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockAlumnos);
  });

  it('debería agregar un alumno', () => {
    const nuevoAlumno: Alumno = { id: '3', nombre: 'Carlos', apellido: 'Lopez', edad: 28, email: 'carlos@example.com' };

    service.agregarAlumno(nuevoAlumno).subscribe((alumno) => {
      expect(alumno).toEqual(nuevoAlumno);
    });

    const req = httpMock.expectOne(`${service.url}`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(nuevoAlumno);
    req.flush(nuevoAlumno);
  });

  it('debería eliminar un alumno', () => {
    const alumnoAEliminar: Alumno = { id: '1', nombre: 'Juan', apellido: 'Perez', edad: 25, email: 'juan@example.com' };

    service.eliminarAlumno(alumnoAEliminar).subscribe(() => {
      // Verificar que el alumno haya sido eliminado
    });

    const req = httpMock.expectOne(`${service.url}/${alumnoAEliminar.id}`);
    expect(req.request.method).toBe('DELETE');
    req.flush(null);
  });

  it('debería editar un alumno', () => {
    const oldAlumno: Alumno = { id: '1', nombre: 'Juan', apellido: 'Perez', edad: 25, email: 'juan@example.com' };
    const newAlumno: Alumno = { id: '1', nombre: 'Juan', apellido: 'Gonzalez', edad: 26, email: 'juan@example.com' };

    service.editAlumno(oldAlumno, newAlumno).subscribe((alumno) => {
      expect(alumno).toEqual(newAlumno);
    });

    const req = httpMock.expectOne(`${service.url}/${oldAlumno.id}`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(newAlumno);
    req.flush(newAlumno);
  });
});
