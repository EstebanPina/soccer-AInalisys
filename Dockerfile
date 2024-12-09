# Etapa de construcción
FROM node:22 AS builder

# Establece el directorio de trabajo
WORKDIR /app

# Define variables de entorno necesarias en la construcción
ARG BACKEND_URL
ARG NEXTAUTH_SECRET
ENV BACKEND_URL=http://balancersoccerainalysis-452617318.us-east-1.elb.amazonaws.com/api_soccer/v1
ENV NEXTAUTH_SECRET=6LTlIaLTQAmlz3GVfIlmOiSSRhT+g4XbPaPDeGQ0Mz3zesdL3sUNvuArumqykbNL5qoLRZeyzTWn34xkenHq2Q==


# Copia los archivos necesarios para instalar dependencias
COPY package.json package-lock.json ./

# Instala dependencias necesarias
RUN npm install

# Copia el resto del código al contenedor
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Etapa para servir la aplicación
FROM node:22 AS runner

# Configura el directorio de trabajo
WORKDIR /app

# Copia archivos necesarios desde la etapa de construcción
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Configura la variable de entorno
ENV NODE_ENV=production


# Expone el puerto que utiliza la aplicación
EXPOSE 3000

# Comando para iniciar el servidor de Next.js
CMD ["npm", "run", "start"]
