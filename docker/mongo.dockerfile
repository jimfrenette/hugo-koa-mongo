FROM mongo

COPY ./entrypoint-initdb.d/* /docker-entrypoint-initdb.d/
