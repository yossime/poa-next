# Use Node 20
FROM node:20.10.0

WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy application code
COPY . .

# Build Next.js
RUN npm run build

# Cloud Run expects the app to listen on $PORT
ENV PORT=8080
EXPOSE 8080

# Start Next.js binding to 0.0.0.0
CMD ["npm", "run", "start", "--", "-p", "8080", "-H", "0.0.0.0"]
