\COPY product(id, name, slogan, description, category, default_price) FROM './csvStorage/product.csv' DELIMITER ',' CSV HEADER;
\COPY features(id, product_id, feature, value) FROM './csvStorage/features.csv' DELIMITER ',' CSV HEADER;
\COPY style(id, productId, name, sale_price, original_price, default_style) FROM './csvStorage/styles.csv' DELIMITER ',' NULL AS 'null' CSV HEADER;
\COPY photos(id, styleId, url, thumbnail_url) FROM './csvStorage/photos.csv' DELIMITER ',' QUOTE E'\b' CSV HEADER;
\COPY related(id, current_product_id, related_product_id) FROM './csvStorage/related.csv' DELIMITER ',' CSV HEADER;
\COPY skus(id, styleId, size, quantity) FROM './csvStorage/skus.csv' DELIMITER ',' CSV HEADER;


-- SELECT * FROM photos LIMIT 15;

