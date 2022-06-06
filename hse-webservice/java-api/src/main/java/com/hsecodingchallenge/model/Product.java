package com.hsecodingchallenge.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Product")
@Entity
public class Product {
    
    @Id
    @GeneratedValue
    private Long id;
    private String name;
    private Long categoryId;
    private double price;
    //private String defaultCurrency; string or what?

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
}
