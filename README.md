# 🚀 Bienvenido al proyecto: Hackathon Backend

Este proyecto fue creado con los siguientes objetivos principales:

✅ Cumplir con los requerimientos del hackathon.
🧠 Aplicar conocimientos adquiridos en un entorno práctico y colaborativo.

## 🎯 Función principal

Gestionar de manera eficiente y dinámica los datos y procesos internos del sistema backend.

## 🧱 Tecnologías utilizadas

- ⚙️ Node.js (con AdonisJS)
- 🟦 TypeScript
- 🛢️ PostgreSQL
- 📦 npm para gestión de dependencias

## 📦 Requisitos previos

Asegúrate de tener instaladas las siguientes herramientas:

- **Node.js** (versión: >= 18.0.0)
  - Para verificar que lo tienes en tu máquina, ingresa al terminal y escribe `node -v`. Si no lo tienes, instálalo desde [Node.js](https://nodejs.org/).
- **npm**
  - Para verificar que lo tienes en tu máquina, ingresa al terminal y escribe `npm -v`. Si no lo tienes, se instala junto con Node.js.

## 💥 Proceso de instalación

Clona este repositorio en tu máquina local:

```bash
git clone https://github.com/IngAlim2023/hackathon-back.git
```

## 🎒 Instalación de dependencias

En la terminal, dentro del directorio del proyecto, ejecuta:

```bash
npm install
```

## 🏃 Ejecución del proyecto

Para iniciar el servidor de desarrollo, ejecuta:

```bash
npm run dev
```

## 🚫 Convenios importantes para manejo del proyecto

### 📦 Instalación de nuevas librerías:

- Avisar al equipo antes de instalar nuevas dependencias.
- Hacer `git push` inmediatamente después de instalar, para que el `package.json` y `package-lock.json` estén actualizados.
- Los demás deben ejecutar `npm install` para mantener sincronizado el entorno.

### 🧭 Modificaciones en rutas o controladores:

- Avisar al equipo antes de hacer cambios importantes.
- Una vez realizados los cambios, hacer push y notificar al equipo para que todos actualicen.

### 🚧 Git Flow

Estamos trabajando con Git Flow. Las ramas principales son:

- **main**
- **develop**

Pasos para trabajar en una nueva funcionalidad:

1. Ubícate en la rama `develop`:

   ```bash
   git checkout develop
   ```

2. Crea una nueva rama para tu funcionalidad:

   ```bash
   git checkout -b feature/mi_feature
   ```

3. Sube tu rama a GitHub:

   ```bash
   git push origin feature/mi_feature
   ```

4. Una vez terminada tu funcionalidad, realiza un pull request y notifica al equipo para revisión.

## 📣 Contacto

Para cualquier duda o problema técnico, comunícate por el grupo de WhatsApp del equipo 👥.

## 🚧 Estructura del proyecto

```plaintext
hackathon-back/
├── app/
│   ├── controller/
│   ├── exceptions/
│   ├── middleware/
│   └── models/
├── bin/
├── config/
├── database/
│   ├── migrations/
│   └── seeders/
├── start/
│   ├── env.ts
│   ├── kernel.ts
│   └── routes.ts
├── tests/
├── ace.js
├── adonisrc.ts
├── package.json
├── tsconfig.json
└── README.md
```
