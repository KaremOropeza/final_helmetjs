# Information Security with HelmetJS

**Autor**
# Karem Alitzel Oropeza Yañez
**Carrera: Ingenieria en Sistemas Computacionales /**
**No. Control: 211150068 /**
**Semestre: 8 /**

# Proposito:
Implementación de buenas prácticas de seguridad web en aplicaciones Node.js mediante el uso del middleware Helmet, una herramienta diseñada para configurar de manera sencilla y efectiva cabeceras HTTP seguras en servidores Express. 
# Utilidad:
Este curso proporciona una base esencial para el diseño de aplicaciones seguras desde el backend y es altamente relevante para desarrolladores web, administradores de sistemas y aspirantes a especialistas en ciberseguridad.
# Metodologia:
**Preparación del Entorno:**
    Importar e inicializa Helmet en tu archivo myApp.js
**Implementación de Módulos de Seguridad**
    helmet.hidePoweredBy():Oculta la cabecera X-Powered-By, que suele indicar que usas Express, lo que podría dar pistas a atacantes.
    helmet.frameguard(): Evita que tu app sea incrustada en un iframe (lo cual previene ataques tipo clickjacking).
    helmet.xssFilter(): Ayuda a prevenir inyecciones de scripts maliciosos (Cross-Site Scripting).
    helmet.noSniff(): Evita que navegadores infieran el tipo MIME del contenido, protegiendo de ataques por contenido malicioso.
    helmet.ieNoOpen(): Previene que IE ejecute archivos como HTML no confiables.
    helmet.hsts():Solicite a los navegadores que accedan a su sitio solo a través de HTTPS
    helmet.dnsPrefetchControl(): Desactiva la búsqueda previa de DNS, útil para proteger la privacidad del usuario.
    helmet.noCache(): Desactiva el almacenamiento en caché del navegador para prevenir que se almacene información sensible.
    helmet.contentSecurityPolicy(): Define qué fuentes de contenido están permitidas, evitando ejecución de scripts o recursos no autorizados.
    Configure Helmet Using the ‘parent’ helmet() Middleware: Aprendes a activar o desactivar módulos específicos de Helmet según tus necesidades.