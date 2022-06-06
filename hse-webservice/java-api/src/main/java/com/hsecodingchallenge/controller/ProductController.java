package com.hsecodingchallenge.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hsecodingchallenge.model.Product;
import com.hsecodingchallenge.repository.ProductRepository;

@RestController
@RequestMapping("/product")
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @PostMapping
    public Product saveProduct(@RequestBody Product product) {
        System.out.println(product);
        Product dumbProduct = new Product(new Long(10), "dummy", new Long(10), 10.0);
        System.out.println(dumbProduct);
        return productRepository.save(dumbProduct);
    }

    @GetMapping
    public List<Product> findAllProducts() {
        return productRepository.findAll();
    }

    @GetMapping("/{id}")
    public Product findProduct(@PathVariable long id) throws Exception {
        Product product = productRepository.findById(id).orElseThrow(() -> new Exception("Product not available"));
        return product;
    }
   
}
