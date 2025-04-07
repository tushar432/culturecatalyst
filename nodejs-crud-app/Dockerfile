# 1. Selecting Base image
FROM node:16-alpine AS build

# 2. Set working directory
WORKDIR /app

# 3. copy package.json
COPY package.json ./

# 4. Install required packages
RUN npm install

#5. Copy the code
COPY . .

#6 Expose the port 
EXPOSE 3000

#7. Start the application
CMD ["npm", "start"]