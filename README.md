# Green Guide

## Introduction
Welcome to the **Green Guide**!
Green Guide is the best way to discover all sustainable and environmentally friendly addresses in Ghent. Together we can further develop our city into a truly green environment!

This project is also a nice reflection of the collaboration between different higher education institutions in Ghent, a unique project that has brought together many different brains.

## Installation
Move to the root of this project and install node_modules.
```bash
npm install
```

## Usage
To start the server write this line of code in the terminal:
```bash
npm run start
```

## Feature overview
### 1.1. Authentication: logging in and out
If a user is not logged in, the application displays a login screen.

- The user/company can log in using an existing username and password.
- The input fields have validation and visual feedback for the user/company.
- The user/company is able to register if they don't have an account yet.
- **Extra feature:** You can login with Google Authentication.
 

### 1.2. Authentication & Authorisation: registering
- The user/company can register with a username, e-mail, password (which is encrypted in the database) and an authorisation.
- The input fields have validation and visual feedback for the user/company.


### 1.3. Main application Functionalities
Each role has specified CRUD movements (CREATE, READ, EDIT, DELETE). Which are explained below:

**A user can...**

- search and view all (popular/new) vendors in the app.
- scan and collect points at a vendor.
- claim rewards (this generates a qr-code)
- filter for certain vendors depending on their category
- view and edit profile settings
- logout or delete profile

**A company can...**

- search and view all (popular/new) vendors in the app.
- scan the qr-code of a customer.
- view rewards that customers can claim.
- filter for certain vendors depending on their category.
- view and edit profile settings.
- logout or delete profile.

### 1.4. Main website Functionalities

**A company can...**

- edit their contact person/company information.
- add images
- ...

## Technical dependencies
This is an overview of all the dependencies used in this project:

### General
- **nodemon** during development for auto-reload of the application.
- **NodeJS** and **Express** to handle the requests and responses from client <-> server.
- **MVC** (Model, View, Controller) as the application architecture via ExpressJS.
- **ES6 modules** (import & export).) 
- **handlebars**
- **sass**

### Database
- Storage of data using an **SQLite3** database
- DB connection and SQL-queries to database go via **TypeORM**

### Authentication
- **JWT** - Json Web Token
- Password hashing using **bcrypt**

### Express middleware
- body-parser
- cookie-parser
- Validation of data with express-validator

### Map implementation
- **Leaflet**

### Testing
- Jest

### Seeding
- When the application is started for the first time, the database is filled with seeding data. 
- **Fakerjs** was used to generate this data.

### Git
- **GitHub** is a code hosting platform for version control and collaboration, we used Git to regularly commit our progress.

### Code Styling
- **ESLint** with the eslint-config-airbnb as the base config.

### Documentation
- The API is documented with **Swagger**.


## Support
Should you encounter any issues or questions, you can contact our team on johanna.debck@student.luca-arts.be :)


## Authors
This project was made with love and devotion by yours truly, <br> Emma Van der Haeghen, Brent Van Steertegem, Jef Leroux <3


## License
MIT License

Copyright (c) 2022 Emma Van der Haeghen, Brent Van Steertegem and Jef Leroux

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.