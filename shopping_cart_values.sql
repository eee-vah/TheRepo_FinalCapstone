CREATE DATABASE shopping_cart;
USE shopping_cart;

INSERT INTO items(id, category, description, imported, item_image_url, name, price, quantity)
VALUES
(1, "Books", "Exploring the anguish of immigration and the lasting effects that displacement has on a child and her family.", false, "http://www.abramsbooks.com/bwcdsweeps/assets/img/9781419718779.png", "The Best We Could Do by Thi Bui", 12.49, 50),
(2, "Music", "1st Mini Album of highest-charting female K-pop group, Blackpink, released Jun 2018.", false, "https://images-na.ssl-images-amazon.com/images/I/41qdzCmvBqL._SX425_.jpg", "BLACKPINK Square Up", 14.99, 50),
(3, "Food", "91% Cacao with notes of red fruit and nuts.", false, "https://i.pinimg.com/originals/cc/c6/9f/ccc69fb3286843a8587431e3a62eb931.jpg", "Guittard Nocturne Chocolate Bar", 0.85, 50),
(4, "Food", "85% Cacao with subtle cherry notes.", false, "https://sep.yimg.com/ay/yhst-84404158564241/guittard-85-cocoa-clair-de-lune-bittersweet-chocolate-bar-single-1.jpg", "Guittard Clair De Lune Chocolate Bar", 0.85, 50),
(5, "Luxury Items", "Free of parabens and toxic chemicals, cruelty-free, and made by a Woman-Owned Business.", false, "https://cdn.shopify.com/s/files/1/1445/2216/products/SamplePalette-min_grande.jpg?v=1567772037", "Skylar Sample Palette", 18.99, 50),
(6, "Luxury Items", "Free of parabens and toxic chemicals, cruelty-free, and made by a Woman-Owned Business.", false, "https://cdn.shopify.com/s/files/1/1445/2216/products/Meadow-min_grande.jpg?v=1567773015", "Skylar Meadow", 20.89, 50),
(7, "Medical", "50 packets of two 200mg coated tablets in each packet.", false, "https://images-na.ssl-images-amazon.com/images/I/919RaApmJtL._SL1500_.jpg", "Advil Ibuprofen Tablets", 9.75, 50),
(8, "Food", "Pure dark chocolate entirely made in Vietnam from the finest Vietnamese ingredients.", true, "https://marouchocolate.com/wp-content/uploads/2017/06/Marou_SO_Coffee-min.png", "Marou Arabica Coffee Chocolate Bar", 11.85, 50),
(9, "Food", "Pure dark chocolate entirely made in Vietnam from the finest Vietnamese ingredients.", true, "https://marouchocolate.com/wp-content/uploads/2017/06/Marou_SO_BenTre-min.png", "Marou Dark Chocolate Bar", 10.50, 50),
(10, "Books", "Personal memoir written by the former First Lady.", false, "https://images-na.ssl-images-amazon.com/images/I/81h2gWPTYJL.jpg", "Becoming by Michelle Obama", 10.00, 50);