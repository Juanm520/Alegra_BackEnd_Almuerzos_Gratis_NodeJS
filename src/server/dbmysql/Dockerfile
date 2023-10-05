FROM mysql

VOLUME ["/var/lib/mysql"]

COPY ./create_tables.sql /home/

WORKDIR /home/

EXPOSE 3306
