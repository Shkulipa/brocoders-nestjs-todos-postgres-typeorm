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