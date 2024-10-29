# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /Leche_Lanzema_ui_garden_build_checks

# Copy the application files into the specified working directory
COPY . /Leche_Lanzema_ui_garden_build_checks

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the port for Storybook
EXPOSE 8018

# Start Storybook
CMD ["npm", "run", "storybook"]
