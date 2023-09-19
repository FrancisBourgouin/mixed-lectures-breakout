### What is a database

- Place to store data
- Organized collection
- Collect data
- Relational data
- Rows / Columns

- Way to store organized data in a persistent fashion

### Why do we want to use a DBMS ?

- Efficient way of storing, collecting, and organizing data
- Uses a simple language to interact with the information stored
- ACID compliant, transactions, persistent, scalable
- Very very fast

LAMP Stack => Linux Apache MySQL PHP

Non Relational Databases: MongoDB, NoSQL, Redis, Firebase
Relational Databases: PostgreSQL, SQLite, MySQL, MariaDB

SQL => Structured Query Language

### SQL Life

- Single quotes when working with strings
- Double quotes when working with column names
- Don't forget the semicolon!
- Write SQL like you would write english (if the query doesn't make sense in a english sentence, it's probably wrong)
- WHERE for filtering options
- HAVING for filtering using aggregates
- You will probably have to use GROUP BY with HAVING to group up the info in separate sections.
- INNER JOIN is the default JOIN and only picks the rows that have an exisiting value on both sides of the join
- LEFT JOIN will take the FROM table + any matching data to those rows
