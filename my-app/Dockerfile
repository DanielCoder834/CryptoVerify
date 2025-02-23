# Start with a Node.js image for both building and running the app
FROM node:18-alpine AS build

# Set the working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the app (make sure 'npm run build' generates the expected output)
RUN npm run build

# Nginx image for serving the app
# FROM nginx:stable-alpine

# RUN ls
# Copy the built files from the build stage to the Nginx HTML directory
# COPY --from=build /dist /usr/share/nginx/html

# Expose port 80 for the Nginx server
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
