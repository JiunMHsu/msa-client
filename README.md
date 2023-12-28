# Music Streaming App Client

## Descripción

Este repo es el cliente de una aplicación de streaming de musica, concretamente esta diseñado para consumir la API (server) que se encuentra en: [msa-server](https://github.com/JiunMHsu/msa-server).

## TODO

- [x] Implementar custom hook para controlar la peticion y carga, para así poder abortar cuando sea necesario. (Esta copiado)
- [ ] Habría que refactorizar Card y Playable Card, junto a los distintos estilos (por que se agregan funcionalidades de fold, estilos compactos, etc).
- [ ] Refactorizar los componentes y sus propiedades, estandarizar las mismas lógicas y nombrado de variables (className, funciones de acción, onClick, etc...)
- [ ] Hacer clean up del layuot, descartar contenedores innecesarios.
- [ ] Hacer el PlayBar.
- [ ] El tema de Card: Fixear strings largos, ajustar spacing de los textos.
- [ ] Responsive para los Card implica que sea dinámico en tamaño y en cantidad mostrada.
- [ ] Implementar autenticación y sus efectos (ver redux y context).
- [ ] Configurar las rutas (ver si hace falta eso de public y private route).
- [ ] Lazy loading? (ni idea como es esto todavía).
- [ ] Implementar estilos responsive.
- [ ] Implementar contenido (o estilos) por defecto y aminaciones de carga.

## Routes

`/`

`/explore`

`/library`

`/album/:id`

`/playlist/:id`

`/user`

`/artist`
