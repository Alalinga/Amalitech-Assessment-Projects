select * from customers order by customer_id;
-- Creating an Update trigger call customer_updated 
CREATE TRIGGER customer_updated
    BEFORE UPDATE ON customers
    FOR EACH ROW
    EXECUTE PROCEDURE log_customers_change();
-- Testing the trigger customer_updated
UPDATE customers
SET  first_name= 'Alalinga'
WHERE last_name = 'Hall';

select * from customers order by customer_id;
select * from customers_log;

-- checking to see if any other update apart from first_ name or last_ name will trigger the trigger fuction

UPDATE customers
SET email_address = 'alalinga.mubarik@gmail.com'
WHERE last_name = 'Hall';
select * from customers order by customer_id;
select * from customers_log;

-- Creating an Insert Triger call customer_insert
CREATE TRIGGER customer_insert
    AFTER INSERT ON customers
    FOR EACH ROW
    EXECUTE PROCEDURE log_customers_change();

INSERT INTO customers (first_name,last_name,years_old)
VALUES
    ('Mohamed','random',66),
    ('Kofi','Kindter',49),
    ('Mama','Atonet',72);
 
SELECT *
FROM customers
ORDER BY customer_id;
 
SELECT * FROM customers_log;



CREATE TRIGGER customer_min_age
    BEFORE UPDATE ON customers
    FOR EACH ROW
    WHEN (NEW.years_old < 13)
    EXECUTE PROCEDURE override_with_min_age();


 UPDATE customers
SET years_old = 12
WHERE last_name= 'Campbell';
 
UPDATE customers
SET years_old= 24
WHERE last_name = 'Atonet';
 
SELECT *
FROM customers
ORDER BY customer_id;
 
SELECT *
FROM customers_log;   



UPDATE customers
SET years_old = 9,
    first_name = 'Musah'
WHERE last_name = 'Kindter';
 
SELECT *
FROM customers
ORDER BY customer_id;
 
SELECT *
FROM customers_log;



DROP TRIGGER IF EXISTS customer_min_age ON customers;

SELECT * FROM information_schema.triggers;

