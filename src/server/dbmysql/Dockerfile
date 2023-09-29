FROM mysql

ENV MYSQL_ROOT_PASSWORD=alegra_mysql
ENV MYSQL_DATABASE=food_storage

VOLUME ["/var/lib/mysql"]

COPY . /home/

WORKDIR /home/

EXPOSE 3306
