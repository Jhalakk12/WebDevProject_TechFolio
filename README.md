# TechFolio
Techfolio is a streamlined and functional portfolio website designed to connect students and administrators efficiently. This platform allows students to create and manage their professional profiles by showcasing their technical skills and sharing insightful blogs on industry trends. For students, Techfolio provides two main features: a "Skills" tab to highlight their expertise and a "Blog" tab to share knowledge, updates, or personal projects For administrators, Techfolio offers powerful tools to view and manage a list of students, search for students by specific skills, and maintain an up-to-date database of technical expertise. The intuitive interface ensures quick and easy navigation between functionalities. Built using modern web technologies like HTML, CSS, JavaScript, Node.js, Express.js, and MongoDB, Techfolio emphasizes user-friendly design and efficient backend operations. It serves as a platform for students to build their professional presence while enabling administrators to track and identify talent based on specific skill requirements, fostering a collaborative and resourceful environment.

## Technologies Used  
### Backend  
- **Node.js**: Runtime environment.  
- **Express.js**: Web framework for building RESTful APIs.  
- **Mongoose**: MongoDB driver .  

### Frontend  
- **EJS**: Templating engine for dynamic views.   
- **HTML/CSS**: Frontend design and structure.  

### Database  
- **MongoDB**: NoSQL database for data storage.
- ----------------------------------------------------
## Features  
- **CRUD Operations**:
  - Create, Read, Update, and Delete records stored in MongoDB.
- **Dynamic Templating**:
  - Pages rendered dynamically using **EJS** and **Handlebars**.
- **Responsive UI**:
  - Designed with HTML and CSS for better user experience.
- **Modular Design**:
  - Cleanly structured with reusable components and middleware.
-----------------------------------------------------

## Installation  
### Pre-requisites:
1. Node.js and npm installed on your system.
2. MongoDB installed and running locally
3. Dependencies installed in Project folder

-----------------------------------------------------

## Commands

1. **cd TechFolio-Express-Mongo-EJS-Handlebar**
2. Run the following command and follow the prompts to create a package.json file:
**npm init -y**
3. Update package.json to include dependencies : express, EJS, mongoose and express-handlebars
4. Install the depenencies:
**npm install**
5. Start the app:
**npm run dev**

---------------------------------------------

## Explanation of Files and Folders
### public/:

Contains static assets like HTML, CSS, JavaScript, and images.
Helps separate design assets from the server logic.

### views/:

Stores templates for rendering dynamic content.
ejs/ to demonstrate template engines.

### models/:

Defines the MongoDB schemas using Mongoose.

### routes/:

Contains route handlers for specific endpoints.
Routes are modularized for better maintainability.

### app.js:

The main entry point for the application.
Sets up the server, middleware, and routes.

### README.md:

Contains project instructions and documentation.
