# E-Commerce Backend API

## 13 Object-Relational Mapping (ORM): E-Commerce Back End

## 📝 Description

The E-Commerce Backend API is a robust server-side application that empowers e-commerce platforms with a dynamic and scalable database management system. Built with Node.js, Sequelize ORM, and MySQL, this application provides essential API endpoints for managing product catalogs, including departments, products, and tags. It facilitates seamless CRUD operations, enabling front-end developers to effortlessly interact with back-end data for e-commerce solutions.

## 🚀 Getting Started

1. **Clone the Repository**: Clone this project to your local machine using `git clone`.
2. **Navigate to Project Directory**: Change into the project directory.
3. **Install Dependencies**: Execute `npm install` to install required dependencies.
4. **Database Setup**: Initialize your MySQL database using the provided `schema.sql` in the `db` directory. Optionally, seed the database with initial data from `seeds` directory by running `npm run seed`.
5. **Environment Configuration**: Create a `.env` file in the root directory to store your database name (`DB_NAME`), user (`DB_USER`), and password (`DB_PASSWORD`).
6. **Launch the Server**: Start the application server using `npm start`. Ensure you have MySQL running.

## 📋 User Story

AS A manager at an internet retail company  
I WANT a back end for my e-commerce website that uses the latest technologies  
SO THAT my company can compete with other e-commerce companies

## 📋 Acceptance Criteria

- GIVEN a functional Express.js API
- WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
- THEN I am able to connect to a database using Sequelize
- WHEN I enter schema and seed commands
- THEN a development database is created and is seeded with test data
- WHEN I enter the command to invoke the application
- THEN my server is started and the Sequelize models are synced to the MySQL database
- WHEN I open API GET routes in Insomnia for categories, products, or tags
- THEN the data for each of these routes is displayed in a formatted JSON
- WHEN I test API POST, PUT, and DELETE routes in Insomnia
- THEN I am able to successfully create, update, and delete data in my database

## 🎥 Walkthrough Video

COMING SOON

## ✨ Features

- CRUD operations for managing product categories, products, and tags.
- Sequelize ORM for MySQL database interaction.
- Express.js server for handling API requests.
- Dotenv for environment variable management.
- Comprehensive API testing via Insomnia or Postman.

## 📷 Screenshots

COMING SOON

## 💡 Resources

- [Sequelize Documentation](https://sequelize.org/)
- [Express.js Documentation](https://expressjs.com/)
- [MySQL Documentation](https://dev.mysql.com/doc/)
- [Dotenv npm package](https://www.npmjs.com/package/dotenv)
- Additional learning resources: MDN Web Docs, W3Schools, Stack Overflow

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
