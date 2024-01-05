# Music Streaming App Client

## Descripción

Este repo es el cliente de una aplicación de streaming de musica, concretamente esta diseñado para consumir la API (server) que se encuentra en: [msa-server](https://github.com/JiunMHsu/msa-server).

## TODO

- Generales:

  - [X] Implementar custom hook para controlar la peticion y carga, para así poder abortar cuando sea necesario. (Esta copiado)
  - [ ] Modificar los Card, considerar el plegable (ver si hacer un componente nuevo, adaptar el Card normal o modificacion en scss únicamente).
  - [ ] Hacer clean up de todos los componentes, descartar contenedores innecesarios.
  - [ ] Refactorizar los componentes y sus propiedades, estandarizar las mismas lógicas y nombrado de variables (className, funciones de acción, onClick, etc...)
  - [ ] Lazy loading? (ni idea como es esto todavía).

- Rutas y Vistas:

  - [X] Definir todas las vistas.
  - [X] Estructurar las Rutas.

- Usuarios:

  - [ ] Implmentar funcionalidad de SignUp y Login.
  - [ ] Implementar Redux para manejo de usuario.
  - [ ] Armar los formularios por componente Modal.
  - [ ] Implementar autenticación por JWT.

- Player:

  - [ ] Implementar funcionalidad de streaming de audio *interactuando con el backend*.
  - [ ] Implementar Componente PlayBar.
  - [ ] Implementar funcionalidad de Cola.

- Estilos (una mierda):
  - [ ] Implementar estilos responsive.
  - [ ] Ajustar los estilos de ContentRow.
  - [ ] Implementar textos dinámicos (ajustar el largo de texto oculatando el exceso, reemplazando con '...').
  - [ ] Implementar contenido (o estilos) por defecto y animaciones de carga.

## Para tener en cuenta

El ContentRow esta hecho un asco por el tema de adaptar tres posibilidades de contenido (Artist, Album, Playlit) para el display. Habría que pensar otra solución.
