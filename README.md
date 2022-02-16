## Descripción

_Al mando estelar,_

Según las ordenes recibidas,

- Se ha implementado un módulo avanzado para la selección de objetivos
- La comunicación del módulo se ha adaptado a los requerimientos de fabricación del droide R0-GR, comunicándose mediante peticiones `API HTTP`, aceptando y enviando datos en formato **_JSON_**. Se ha desacoplado el módulo de comuniciones para adaptarlo al nuevo modelo en fabricación R1-GR que se comunicará mediante GraphQL. En el momento en el que lo necesitemos se implementará el nuevo sistema de comunicación.
- Se han instalado los 6 protocolos solicitados para la selección de enemigos. Además, se ha dejado abierto el sistema operativo del droide para que acepte de manera rápida y fácil nuevos protocolos, siempre que cumplan con el contrato de la interfaz de protocolos.
- Se ha implementado el software del módulo de ataque manteniendo los principios de Clean Code, así como la separación por capas para un rápido intercambio de tecnologías, Clean Architecture, para adaptarnos a las posibles mejoras del enemigo.
- Por supuesto, para dar fiabilidad sobre el nuevo sistema, se han implementado tests sobre cada uno de los componentes del módulo, así como sobre el sistema de comunicaciones.

Para ejecutar el nuevo sistema, una vez clonado del repositorio
https://github.com/EduGilPrades/r0-gr-radar
basta con ejecutar `npm install` para instalar las dependencias y a continuación `npm start` o `npm node-dev` para correrlo en modo de desarrollo.

Estoy convencido que con este nuevo sistema de selección de objetivos, nuestro droide R0-GR está preparado para ganar la batalla.

Espero vuestro feedback para saber como ha ido la guerra.
