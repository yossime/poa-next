# Use Node 18 (Cloud Build/Run friendly)
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Copy package files and install deps
COPY package*.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Build (for Next.js/React, change if needed)
RUN npm run build

# Expose port (change if needed)
EXPOSE 3000

# Start the app (change command if needed)
CMD ["npm", "start"]
