# 1. Usa una imagen base oficial de Node.js
FROM node:20 AS builder

# 3. Copia los archivos necesarios para instalar dependencias
COPY package.json package-lock.json ./

# 4. Instala las dependencias necesarias para la construcción
RUN npm install

# 5. Copia el resto del código fuente
COPY . .

# 6. Compila la aplicación (Next.js genera un build de producción)
RUN npm run build

# Etapa para servir la aplicación
FROM node:18 AS runner

# Establece el directorio de trabajo
WORKDIR /app

# Copia las dependencias de producción y el build
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/tsconfig.json ./tsconfig.json

# Establece la variable de entorno para producción
ENV NODE_ENV production

# Expone el puerto que usa Next.js (3000 por defecto)
EXPOSE 3000

# Comando para iniciar el servidor
CMD ["npm", "run", "start"]
