SELECT * FROM customers LIMIT 10;
SELECT * FROM orders LIMIT 10;
SELECT * FROM books LIMIT 10;


SELECT * FROM pg_Indexes WHERE tablename='customers';
SELECT * FROM pg_Indexes WHERE tablename='orders';
SELECT * FROM pg_Indexes WHERE tablename='books';

EXPLAIN ANALYZE SELECT customer_id,quantity FROM orders WHERE quantity>18;


CREATE INDEX orders_customer_id_quantity_idx ON orders(customer_id,quantity) WHERE quantity>18;

EXPLAIN ANALYZE SELECT customer_id,quantity FROM orders WHERE quantity>18;

EXPLAIN ANALYZE SELECT *
FROM customers
WHERE customer_id<100;

ALTER TABLE customers ADD PRIMARY KEY(customer_id);

EXPLAIN ANALYZE SELECT *
FROM customers
WHERE customer_id<100;

SELECT * FROM pg_Indexes WHERE tablename='customers';
CLUSTER customers USING customers_pkey;

SELECT * FROM customers LIMIT 10;

CREATE INDEX orders_customer_id_book_id_idx ON orders(customer_id,book_id);

SELECT * FROM pg_Indexes WHERE tablename='orders';

DROP INDEX orders_customer_id_book_id_idx;

CREATE INDEX orders_customer_id_book_id_quantity_idx ON orders(customer_id,book_id,quantity);

SELECT * FROM pg_Indexes WHERE tablename='orders';

EXPLAIN ANALYZE SELECT *
FROM orders
WHERE quantity * price_base>100;


CREATE INDEX orders_quantity_price_base_idx ON orders ((quantity * price_base));

EXPLAIN ANALYZE SELECT *
FROM orders
WHERE quantity * price_base>100;

--- these two indexes are not necessary
DROP INDEX IF EXISTS books_author_idx;
DROP INDEX IF EXISTS orders_customer_id_quantity_idx;

---
CREATE INDEX customers_last_name_first_name_email_address ON customers (last_name, first_name, email_address);



SELECT *
FROM pg_indexes
WHERE tablename IN ('customers', 'books', 'orders')
ORDER BY tablename, indexname;
