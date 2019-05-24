mongoimport --db chinook --collection Album --type csv -f AlbumId,Title,ArtistId --file /docker-entrypoint-initdb.d/Album.csv
mongoimport --db chinook --collection Artist --type csv -f ArtistId,Name --file /docker-entrypoint-initdb.d/Artist.csv
mongoimport --db chinook --collection Genre --type csv -f GenreId,Name --file /docker-entrypoint-initdb.d/Genre.csv
mongoimport --db chinook --collection MediaType --type csv -f MediaTypeId,Name --file /docker-entrypoint-initdb.d/MediaType.csv
mongoimport --db chinook --collection Track --type csv -f TrackId,Name,AlbumId,MediaTypeId,GenreId,Composer,Milliseconds,Bytes,UnitPrice --file /docker-entrypoint-initdb.d/Track.csv
