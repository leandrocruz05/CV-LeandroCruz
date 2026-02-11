# CV Leandro Cruz - React

Proyecto de CV personal desarrollado con React y Vite. Código simple y organizado, ideal para aprender y personalizar.

## 🚀 Tecnologías

- **React 18.3** - Biblioteca de interfaz de usuario
- **Vite 5** - Herramienta de construcción rápida
- **AOS** - Animaciones en scroll
- **Font Awesome** - Iconos
- **CSS3** - Estilos responsivos

## 📋 Características

- ✅ Interfaz moderna y responsiva
- ✅ Modo oscuro
- ✅ Animaciones suaves
- ✅ Modal para certificados
- ✅ Componentes React modulares
- ✅ Datos separados del código
- ✅ Código nivel junior (fácil de entender)

## 🛠️ Instalación

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm

### Pasos

1. Navega al directorio del proyecto

2. Instala las dependencias:
```bash
npm install
```

## 📦 Scripts Disponibles

### Modo Desarrollo
```bash
npm run dev
```
Inicia el servidor de desarrollo en `http://localhost:5173`

### Build de Producción
```bash
npm run build
```
Genera los archivos optimizados en la carpeta `dist/`

### Vista Previa del Build
```bash
npm run preview
```
Previsualiza el build de producción

## 📁 Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── Header.jsx      # Encabezado
│   ├── InfoPersonal.jsx # Perfil
│   ├── Experiencia.jsx  # Experiencia laboral
│   ├── Educacion.jsx    # Estudios y formación
│   ├── Habilidades.jsx  # Skills
│   ├── Proyectos.jsx    # Proyectos
│   ├── Footer.jsx       # Pie de página
│   └── Certificados.jsx # Modal certificados
│
├── data/               # Datos del CV
│   ├── infoPersonal.js
│   ├── experiencias.js
│   ├── estudios.js
│   ├── formaciones.js
│   ├── habilidades.js
│   └── proyectos.js
│
├── styles/             # Estilos CSS
│   ├── App.css        # Estilos principales
│   └── index.css      # Estilos globales
│
├── App.jsx             # Componente principal
└── main.jsx            # Entry point

public/
├── certificados/       # Imágenes de certificados
├── icons/             # Iconos personalizados
└── perfil/            # Foto de perfil (próximamente)
```

## 📝 Actualizar tu CV

### Cambiar Datos Personales
Edita: [src/data/infoPersonal.js](src/data/infoPersonal.js)

### Agregar Experiencia
Edita: [src/data/experiencias.js](src/data/experiencias.js)

### Agregar Proyecto
Edita: [src/data/proyectos.js](src/data/proyectos.js)

### Actualizar Habilidades
Edita: [src/data/habilidades.js](src/data/habilidades.js)

## 🌐 Deploy

### Netlify (Drag & Drop)
1. `npm run build`
2. Arrastra la carpeta `dist/` a https://app.netlify.com/drop

### Vercel
```bash
npm run build
vercel --prod
```

### GitHub Pages
1. `npm run build`
2. Sube el contenido de `dist/` a la rama `gh-pages`

## 📚 Documentación Adicional

- [ESTRUCTURA.md](ESTRUCTURA.md) - Organización del proyecto
- [CONFIGURACION.md](CONFIGURACION.md) - Archivos de configuración
- [CAMBIOS-REALIZADOS.md](CAMBIOS-REALIZADOS.md) - Historial de cambios

## 

Desarrollado con ❤️ por Leandro Cruz
