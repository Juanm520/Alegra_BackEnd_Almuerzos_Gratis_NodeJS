-- Active: 1696017609462@@127.0.0.1@3306@food_storage
CREATE TABLE ingredients_list (
  ingredient VARCHAR(255) NOT NULL,
  quantity INT NOT NULL,
  unit VARCHAR(50) NOT NULL,
  times_purchased INT NOT NULL,
  PRIMARY KEY (ingredient)
);

CREATE TABLE purchase_history (
  ingredient VARCHAR(255) NOT NULL,
  quantity_purchased INT NOT NULL,
  date_purchased DATE NOT NULL,
  FOREIGN KEY (ingredient) REFERENCES ingredients_list(ingredient)
);

INSERT INTO ingredients_list (ingredient, quantity, unit, times_purchased)
VALUES ('tomato',5,'und', 0),
('lemon',5,'und', 0),
('potato',5,'und', 0),
('rice',5,'cup', 0),
('ketchup',5,'und', 0),
('lettuce',5,'leaf', 0),
('onion',5,'und', 0),
('cheese',5,'1/8 lb', 0),
('meat',5,'1/4 lb', 0),
('chicken',5,'1/4 lb', 0);

