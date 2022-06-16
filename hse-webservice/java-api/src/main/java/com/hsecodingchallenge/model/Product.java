package com.hsecodingchallenge.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Table(name = "Product")
@Entity
public class Product {
    
    @Id
    @GeneratedValue
    @Column(name = "PRODUCT_ID")
    private Long id;

    @Column(name = "NAME")
    private String name;

    @Column(name = "PRICE")
    private double price;

    @JoinColumn(name = "FK_CATEGORY_ID")
    @ManyToOne
    private Category category;

    public Product(){
    }

    @Override
    public String toString(){
        String categoryName = category == null? "none" : category.getName();
        return "{id: " + id + ", name: " + name + ", price: " + price + ", category: " + categoryName + "}";
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }
    
    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

}
