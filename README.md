# Music Streaming App Client

## Descripción

Este repo es el cliente de una aplicación de streaming de musica, concretamente esta diseñado para consumir la API (server) que se encuentra en: [msa-server](https://github.com/JiunMHsu/msa-server).

## TODO

- [x] Implementar custom hook para controlar la peticion y carga, para así poder abortar cuando sea necesario. (Esta copiado)
- [ ] Habría que refactorizar Card y Playable Card, junto a los distintos estilos (por que se agregan funcionalidades de fold etc).
- [ ] Rediseñar comportamiento de las card respecto al botón de play
- [ ] Estilizar el desplegado del SideBar, haciendo que luego de desplegar, los elementos (minicards y los iconos del menú esten justificados).
- [ ] Refactorizar los componentes y sus propiedades, estandarizar las mismas lógicas y nombrado de variables (className, funciones de acción, onClick, etc...)
- [ ] Hacer clean up del layuot, descartar contenedores innecesarios.
- [ ] Implmentar estilos para el layout principal.
- [ ] Revisar estilos (por el momento sólo Card está un poco más complejo).
- [ ] El tema de Card: Fixear strings largos, ajustar spacing de los textos.
- [ ] Responsive para los Card implica que sea dinámico en tamaño y en cantidad mostrada.
- [ ] Implementar estilos responsive.
- [ ] Implementar autenticación y sus efectos (ver redux y context).
- [ ] Configurar las rutas (ver si hace falta eso de public y private route).
- [ ] Lazy loading? (ni idea como es esto todavía).
- [ ] Implementar contenido (o estilos) por defecto y aminaciones de carga.

## Routes

`/`

`/explore`

`/library`

`/album/:id`

`/playlist/:id`

`/user`

`/artist`
