-- to et the size  of the table
SELECT pg_size_pretty(pg_table_size('sensors.observations')) as size;

-- to et the size of each index (observations_pkey and observations_location_id_datetime_idx)

SELECT pg_size_pretty(pg_total_relation_size('sensors.observations_pkey')) as idx_1_size,
    pg_size_pretty(pg_total_relation_size('sensors.observations_location_id_datetime_idx')) as idx_2_size;


-- a query that returns the size of the table’s data, indexes, and the total relation size as three separate columns

SELECT 
    pg_size_pretty(pg_table_size('sensors.observations')) as tbl_size, 
    pg_size_pretty(pg_indexes_size('sensors.observations_location_id_datetime_idx')) as idx_size,
    pg_size_pretty(pg_total_relation_size('sensors.observations')) as total_size;


UPDATE sensors.observations 
SET distance = (distance * 3.281) 
WHERE TRUE;

-- Testing the Update
SELECT 
    pg_size_pretty(pg_table_size('sensors.observations')) as tbl_size, 
    pg_size_pretty(pg_indexes_size('sensors.observations_location_id_datetime_idx')) as idx_size,
    pg_size_pretty(pg_total_relation_size('sensors.observations')) as total_size;

-- runing vacuum on the table
VACUUM sensors.observations;

SELECT pg_size_pretty(pg_table_size('sensors.observations')) as tbl_size;

-- adding more data to the database

\COPY sensors.observations (id, datetime, location_id, duration, distance, category) FROM './additional_obs_types.csv' WITH DELIMITER ',' CSV HEADER;

-- Checking the size again
SELECT pg_size_pretty(pg_table_size('sensors.observations')) as total_size;

-- Runing Vacuum again 
VACUUM FULL sensors.observations;
 
SELECT pg_size_pretty(pg_table_size('sensors.observations')) as total_size;

-- Performing large deletion on the table
DELETE from sensors.observations 
WHERE location_id > 24;

-- checking table size after deletion

SELECT pg_size_pretty(pg_table_size('sensors.observations')) as total_size;


-- Using trucate on the table
TRUNCATE sensors.observations;

-- Adding data to the table

\COPY sensors.observations (id, datetime, location_id, duration, distance, category) FROM './original_obs_types.csv' WITH DELIMITER ',' CSV HEADER;
 
\COPY sensors.observations (id, datetime, location_id, duration, distance, category) FROM './additional_obs_types.csv' WITH DELIMITER ',' CSV HEADER;

SELECT pg_size_pretty(pg_table_size('sensors.observations')) as total_size;




