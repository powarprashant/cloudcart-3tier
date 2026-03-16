CREATE TABLE products (
 id SERIAL PRIMARY KEY,
 name VARCHAR(100),
 description TEXT,
 price INTEGER
);

INSERT INTO products (name,description,price) VALUES
('Gaming Laptop','High performance laptop',1500),
('Smartphone','Latest Android smartphone',800),
('Headphones','Noise cancelling headphones',200);