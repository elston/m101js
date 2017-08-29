M101JS
========================

Docker environment for course of https://university.mongodb.com/courses/M101JS/about

Technology
----------------
- docker
- nodejs 8.3
- mongodb 3.5


Getting Started with Docker and Docker Compose for Local Development
--------------------------------------------------------------------

### Install Docker

https://docs.docker.com/installation/

### Install Docker Compose

http://docs.docker.com/compose/install/

### Install the app's

In the project ./book/dev/ (where the `Makefile` file is located), run:

```
make build_all && make bootstrap_all
```


Getting started with mongo command line shell
--------------------------------------------------------------------

```
make shell_mongoshell
```

then write:

```
mongo admin --host storage -u adminmaster -p passmaster
```

or

```
mongo storage:27017/admin -u adminmaster -p passmaster
```

or

```
mongo storage:27017/m101 -u usermaster -p passmaster
```

Getting started with weber from a shell
--------------------------------------------------------------------

```
make shell_weber
```

then write:

```
node app.js
```


Connect to mongo contaner
--------------------------------------------------------------------

```
docker exec -it m101js_storage_1 /bin/sh
```


Mongo restore dump
--------------------------------------------------------------------

```
mongorestore --host storage -u adminmaster -p passmaster dump
```

Chapter 01
=====================================================================

HW1-1
--------------------------------------------------------------------

answer: Hello from MongoDB!

HW1-2
--------------------------------------------------------------------

after load dump you must create user to db m101

```
make shell_mongoshell
mongo storage:27017/admin -u adminmaster -p passmaster
```

then

```
use m101;
db.createUser({
    user: "usermaster",
    pwd: "passmaster",
    roles: ["dbAdmin"]
});
```


answer: I like kittens

HW1-3
--------------------------------------------------------------------

Answer: Hello, Agent 007.

Chapter 02
=====================================================================

HW2-1
--------------------------------------------------------------------

```
db.movieDetails.find({"year":2013,"rated":"PG-13","awards.wins":0},{"title":1,_id:0});
```

Answer: A Decade of Decadence, Pt. 2: Legacy of Dreams


HW2-2
--------------------------------------------------------------------

good 

```
db.movieDetails.find({}, {title: 1, _id: 0})
db.movieDetails.find({year: 1964}, {title: 1, _id: 0})
```
bad

```
db.movieDetails.find({}, {title: 1})
db.movieDetails.find({title: ""}, {title: 1})
db.movieDetails.find({}, {title})
db.movieDetails.find({title: "Muppets from Space"}, {title: 1})
```


HW2-3
--------------------------------------------------------------------

```
db.movieDetails.find({"countries.1":"Sweden"}).count();
```
Answer: 6


HW2-4
--------------------------------------------------------------------

```
db.movieDetails.find({"genres":["Comedy","Crime"]}).count();
```

Answer: 20

HW2-5
--------------------------------------------------------------------

Answer: $set


Chapter 03
=====================================================================


HW3-1
--------------------------------------------------------------------

Answer: When we call a cursor method passing a callback function to process query results

HW3-2
--------------------------------------------------------------------

Answer: Seamus, Bob


HW3-2
--------------------------------------------------------------------

Answer: 169


HW3-2
--------------------------------------------------------------------

Answer: 18