const express = require('express');
const helmet =require("helmet");
const app = express();


// 1. Oculta la cabecera X-Powered-By, que suele indicar que usas Express, lo que podría dar pistas a atacantes.
// app.use(helmet.hidePoweredBy());
// 2. Evita que tu app sea incrustada en un iframe (lo cual previene ataques tipo clickjacking).
// app.use(helmet.frameguard({action: 'deny'}));
// 3. Ayuda a prevenir inyecciones de scripts maliciosos
// app.use(helmet.xssFilter());
// 4.  Evita que navegadores infieran el tipo MIME del contenido, protegiendo de ataques por contenido malicioso
// app.use(helmet.noSniff());
// 5. Previene que IE ejecute archivos como HTML no confiables.
// app.use(helmet.ieNoOpen());

//Solicite a los navegadores que accedan al sitio solo a través de HTTPS
// const timeInSeconds = 90 * 24 * 60 * 60;
// app.use(helmet.hsts({maxAge: timeInSeconds, force: true}));

//Desactiva la búsqueda previa de DNS
// app.use(helmet.dnsPrefetchControl());
//Desactiva el almacenamiento en caché del navegador para prevenir que se almacene información sensible
// app.use(helmet.noCache());

//app.use(helmet())Incluirá automáticamente todo el middleware mencionado anteriormente, excepto noCache(), y contentSecurityPolicy(), por lo cual se habilitan.
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", 'trusted-cdn.com'],
    }
  },
  noCache: true
}));
































module.exports = app;
const api = require('./server.js');
app.use(express.static('public'));

app.disable('strict-transport-security');
app.use('/_api', api);
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});
let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
