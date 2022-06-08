package com.hsecodingchallenge.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name = "Product")
@Entity
public class Product {
    
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private Long categoryId;
    private double price;

    public Product(){

    }

    public Product(String name, Long categoryId, double price){
        this.name = name;
        this.categoryId = categoryId;
        this.price = price;
    }

    public Product(Long id, String name, Long categoryId, double price){
        this.name = name;
        this.categoryId = categoryId;
        this.price = price;
        this.id = id;
    }

    @Override
    public String toString(){
        return "{id: " + id + ", name: " + name + ", categoryId: " + categoryId + ", price: " + price + "}";
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
    
    public Long getCategoryId() {
        return categoryId;
    }

    public void setCategoryId(Long categoryId) {
        this.categoryId = categoryId;
    }
    
    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }


}
