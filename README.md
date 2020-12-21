# Development of an employee registration app

This application was created in Angular ~ 10.1.6 + Bootstrap v4.5 only for the rest of the grids it was plain css and to consume the data I have created a RestFull API with NodeJS v12.18.4 + Express with connection to MySQL with the DATABASE I have used XAMPP (PhpMyAdmin) since they have worked from Windows.

It is the creation of an employee registry CRUD.

# Steps to install
Download the repository as follows:
```
  $ git clone https://github.com/LoretoEliel/test_angular.git
  $ cd test_angular/

  $ cd api\
  $ npm install --save

  $ cd web\
  $ npm install --save
```

# Configure the DATABASE:
First of all locate the **"db_test_angular.sql"** file and import it into your MySQL. Once that is done, go to the api folder and locate the **"db.js"** file and configure the parameters of your MySQL manager.

# We run the ResFUll API and the Web
```
  $ cd api\
  $ npm run start
```
And in a new terminal we run
```
  $ cd web\
  $ npm run start (RECOMMENDED) or ng serve
```

Once everything is running please go to your preferred browser and enter http://localhost:4200/

## -> Developer
@EliDjangoDev
