## mongodb docker container
`docker pull mongo`
`docker run -d --name mongodatabase -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=mymongo -e MONGO_INITDB_ROOT_PASSWORD=mymongo mongo`