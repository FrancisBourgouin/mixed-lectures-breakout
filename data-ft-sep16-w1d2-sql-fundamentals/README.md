# SQL Fundamentals

## Today's menu

- Installation & Setup for PostgreSQL
- Anatomy of a query
- Order of execution
- Debugging a query

## Super cool links!

https://www.postgresql.org/docs/9.5/sql-select.html

## What is a database

- Organized collection of persistent data
- Information being written to be used at a later time
- Third tier of the web development architecture (Client - Application - Data)

### Database Management System (DBMS)

- Software designed to manage data in a database
- Manipulates the data, the data format, file structure.
- Defines rules to validate and manipulate this data
- Uses a query language

#### Main DBMS

- Oracle
- MySQL (free software)
- Microsoft SQL Server
- IBM DB2
- PostgreSQL (free software)
- SQLite (free software)
- MariaDB (free software)

### Types of Databases

- Relational databases
  - MySQL, Postgresql, SQLite
- Key-value stores (like Javascript objects)
  - Redis
- Column stores
  - Cassandran
  - HBase
- Graph databases
- Document databases (JSON like format)
  - MongoDB
- Real-Time Database
  - Firebase

## Relational Databases

- Tables (data stored in rows and columns)
- There is a relationship between the tables

## Why should we use a DBMS ?

Instead of storing values in memory, it's preferable to use a database management system for multiple reasons.

- It's persistent, in opposition to in-memory storage
- It's optimized to handle a lot of transactions, unlike storing our data in a JSON file
- It's cross-platform, so you could have a JS client and a Python client interacting with the same DBMS

## SQL or Structured Query Language

- Developed by IBM in the early 70s
- Initially called SEQUEL (Structured English Query Language)

- Declarative language (vs imperative)
- We state only what we need
- We do not worry about how to get it

### Data Definition Language (DDL)

- Creating a database (createdb name)
- Deleting a database (dropdb name)
- Creating, modifying, of deleting tables


### Data Manipulation Language (DML)

- INSERT
- UPDATE
- DELETE
- SELECT

## Write SELECT statements

- Tables have an id column marked as a PK, this is our "Primary Key"
- Primary keys are unique identifiers which identifies each row
- We are using an auto increment id generated by postgres
- The Foreign Key (FK) is going to contain the id value of the projects table

### SELECT STATEMENT

Full Syntax of an SQL SELECT Query

```sql
SELECT column list, function(), function(), ...
FROM table1
INNER JOIN table2
...
ON table1.col1 = table2.col2
...
WHERE criteria for row selection
[AND criteria for row selection]
[OR criteria for row selection]
GROUP BY column list
HAVING criteria for function results
ORDER BY column list;
```

#### BASIC SELECT QUERY

- The SELECT statement is specifying the columns of the tables should be part of the output
- `*` all columns or specify each column names individually

`SELECT * FROM projects;`

`SELECT name FROM projects;`

`SELECT * from tasks;`

`SELECT name, completed from tasks;`

- The `WHERE` is filtering out the rows of the result set

```sql
SELECT *
FROM tasks
WHERE completed = TRUE;
```

- We can use `ORDER BY` to sort the result set

```sql
SELECT *
FROM tasks
WHERE completed = TRUE
ORDER_BY project_id DESC;
```

- Aggregate functions

- We can use aggregate functions like `COUNT`, `SUM`, `AVG`, `MIN`,`MAX`

```sql
SELECT completed, count(id)
FROM tasks
GROUP BY completed;
```

- JOINS

- We use joins when we need the data of more than one table

- There are different types of joins

  - INNER JOIN
  - [LEFT || RIGHT] OUTER JOIN

```sql
SELECT *
FROM projects
INNER JOIN tasks
ON projects.id = tasks.project_id;
```

