DROP TABLE IF EXISTS product cascade;


CREATE TABLE product (
 id SERIAL,
 name  VARCHAR(100),
 description VARCHAR(500),
 slogan  VARCHAR(300),
 category  VARCHAR(400),
 default_price  INTEGER
);
ALTER TABLE product ADD CONSTRAINT product_pkey PRIMARY KEY (id);


DROP TABLE IF EXISTS features cascade;
CREATE TABLE features (
 id BIGSERIAL,
 product_id  INTEGER,
 feature  VARCHAR(300),
 value  VARCHAR(300)
);
ALTER TABLE features ADD CONSTRAINT features_pkey PRIMARY KEY (id);


DROP TABLE IF EXISTS style cascade;
CREATE TABLE style  (
 id BIGSERIAL,
 productId  INTEGER ,
 name VARCHAR(100),
 original_price  INTEGER,
 sale_price  INTEGER,
 default_style INTEGER
);
ALTER TABLE style  ADD CONSTRAINT style_pkey PRIMARY KEY (id);


DROP TABLE IF EXISTS skus cascade;
CREATE TABLE skus (
 id BIGSERIAL,
 styleId   INTEGER,
 size VARCHAR(100),
 quantity INTEGER
);
ALTER TABLE skus ADD CONSTRAINT skus_pkey PRIMARY KEY (id);



DROP TABLE IF EXISTS photos cascade;
CREATE TABLE photos (
 id BIGSERIAL,
 styleId  INTEGER,
 url  TEXT,
 thumbnail_url  TEXT
);
ALTER TABLE photos ADD CONSTRAINT photos_pkey PRIMARY KEY (id);


DROP TABLE IF EXISTS related cascade;
CREATE TABLE related (
 id BIGSERIAL,
 current_product_id  INTEGER,
 related_product_id INTEGER
);
ALTER TABLE related ADD CONSTRAINT related_pkey PRIMARY KEY (id);


ALTER TABLE features ADD CONSTRAINT features_product_id_fk  FOREIGN KEY (product_id ) REFERENCES product(id);
ALTER TABLE style  ADD CONSTRAINT style_productId_fk  FOREIGN KEY (productId ) REFERENCES product(id);
ALTER TABLE skus ADD CONSTRAINT skus_styleId_fk  FOREIGN KEY (styleId  ) REFERENCES style (id);
ALTER TABLE photos ADD CONSTRAINT photos_styleId__fk FOREIGN KEY (styleId ) REFERENCES style (id);
ALTER TABLE related ADD CONSTRAINT related_current_product_id_fk FOREIGN KEY (current_product_id ) REFERENCES product(id);


CREATE INDEX product_index ON product(id);
CREATE INDEX styles_index ON style(id);
CREATE INDEX skus_index ON skus(styleId);
CREATE INDEX related_index ON related(id);
CREATE INDEX photo_index ON photos(styleId);
CREATE INDEX related_indexs ON related(id);
CREATE INDEX features_index ON features(product_id);