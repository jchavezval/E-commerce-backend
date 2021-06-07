# e-commerce back end

<div style="position: absolute; top: 22px; right: 50px">

![licence: MIT](https://img.shields.io/badge/license-MIT-blue)
</div>

## Description 
I've refactored an e-commerce application that allows users to place their items into a database. I have done this by creating a backend to handle get, post, and delete calls through JavaScript/node.js and MySQL.

## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Questions](#questions)
  - [License](#license)

<a href = "#installation"></a>

## Installation
This application requires MySQL and node.js to run locally. You can connect to a MySQL database remotely as well.

- Clone this repository to your machine. 
- Navigate to the root directory in your terminal
- Run the command ```npm i``` to install all dependencies
- If you plan to run the application locally:
  - run ```touch .env``` then:
    - Open your .env file ```open .env``` and add the following variables to configure the connection to your MySQL database
      ```
        DB_NAME='ecommerce_db'
        DB_USER='root'   <<< your MySQL username
        DB_PW='secret'   <<< your MySQL password
      ```
  - On first use:
    - Open the MySQL monitor (```npm run db```) -OR- (```mysql -u root -p```)
      - Enter your MySQL password.
      - To create your ecommerce_db database
        - Run ```source db/schema.sql```
      - Then run ```quit``` to leave the mySQL monitor 
- If you would like to test the application with dummy data
- Run ```npm run seed``` from the command line

- Run ```npm start``` to start your server


## Usage
To properly use this application, have MySQL installed. Once installed, run "source db/schema.sql" in the command line, then exit the sql shell. Next run "npm run seed" then "npm start" to connect to the server. Lastly, go to Insomnia to check that all routes are functioning. 

### User Request
```
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```
### Acceptance Criteria
```
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia Core for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
THEN I am able to successfully create, update, and delete data in my database
```
Demo provided below:

<img src = "assets/imgs/ecommerce-demo-db.gif" alt = "db preview"> 
https://drive.google.com/file/d/1pPihVLNAAjuyeoDEog-HgLN9iu79Wt_v/view

## Questions

- Feel free to reach out with any questions

## License
- MIT

### Contact information:
- GitHub: [jchavezval](https://www.github.com/jchavezval)
- Email: [jmchv20011@gmail.com](mailto: jmchv2001@gmail.com)
