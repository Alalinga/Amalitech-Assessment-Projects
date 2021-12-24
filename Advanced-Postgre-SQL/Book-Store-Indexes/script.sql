SELECT * FROM customers LIMIT 10;
SELECT * FROM orders LIMIT 10;
SELECT * FROM books LIMIT 10;

SELECT
 *
FROM
    pg_indexes
WHERE
    tablename = 'customers';



SELECT
 *
FROM
    pg_indexes
WHERE
    tablename = 'books';

 SELECT
 *
FROM
    pg_indexes
WHERE
    tablename = 'orders';   

--Creating indexes on orders table

CREATE INDEX orders_customer_id_idx  ON orders(customer_id);


 --- creating multicolumn index -------

--checking the runtime of a query searching
 EXPLAIN ANALYZE SELECT original_language,title,sales_in_millions FROM books WHERE original_language='French';

--- checking the curreent size of tabel bfore creating multicolumn index
SELECT pg_size_pretty (pg_total_relation_size('books'));


CREATE INDEX books_original_lanaguage_title_sales_in_millions_idx On books(original_language,title,sales_in_millions);


--checking the runtime of a query searching 
 EXPLAIN ANALYZE SELECT original_language,title,sales_in_millions FROM books WHERE original_language='French';

--- checking the curreent size of tabel bfore creating multicolumn index
SELECT pg_size_pretty (pg_total_relation_size('books'));


DROP INDEX books_original_lanaguage_title_sales_in_millions_idx;


----bulk insert

SELECT NOW();
 
\COPY orders FROM 'data.txt' DELIMITER ',' CSV HEADER;
 
SELECT NOW();




