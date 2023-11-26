# Run
```
docker-compose up --build
```

# DB(docker development)
1. run docker
2. open http://localhost:5050

3. 
```
email: admin@example.com
pass: root
```

4. create server:
```
name: YOUR_NAME
localhost: postgres
db: todo
username: postgres
password: postgres
```

# env
settings for postgres if get up app local .env instead of docker container:
```
POSTGRES_HOST=localhost
POSTGRES_PORT=5433
POSTGRES_USERNAME=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DATABASE=todo
```

settings for postgres for docker container .env:
```
POSTGRES_HOST=postgres
POSTGRES_PORT=5432
POSTGRES_USERNAME=postgres
POSTGRES_PASSWORD=postgres
POSTGRES_DATABASE=todo
```

# Swagger
```
http://localhost:3000/docs
```

# Task
Todo App
App requirements
Create REST API for the Todo App.

Requirements:
1. Users can create many to-do lists (For example: Shopping List, Learn, Daily Tasks, etc).
    1.1 Users can delete their to-do list.
    1.2 Users can create an infinite number of to-do lists.
        1.2.1 It should be displayed with infinite scrolling.
        1.2.2 The endpoint on 1 page must show not greater than 50 todo lists

    1.3 Validations:
        1.3.1 Todo’s title max is 128 characters.

2. Each to-do list can contain many items (example: Shopping List (apples, milk), training (NodeJS, PostgreSQL), etc.).
    2.1 Users can mark items as done or undone.
    2.2 Users can create, edit, and delete items.

3. Security
    3.1 Users can create, view, edit, or delete only their to-do lists.