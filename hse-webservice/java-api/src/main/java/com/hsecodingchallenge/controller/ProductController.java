package com.hsecodingchallenge.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hsecodingchallenge.model.Product;
import com.hsecodingchallenge.repository.ProductRepository;

@RestController
public class ProductController {

    @Autowired
    private ProductRepository productRepository;

    @RequestMapping(value="/product", method=RequestMethod.POST)
    public Product saveProduct(@RequestBody Product product) {
        return productRepository.save(product);
    }

    @RequestMapping(value="/products", method=RequestMethod.GET)
    public List<Product> findAllProducts() {
        return productRepository.findAll();
    }

    @GetMapping("/products/name")
	public List<Product> getProductsByName(@RequestParam String name) {
		return productRepository.findByName(name);
	}

    /*@GetMapping("/{id}")
    public Product findProduct(@PathVariable long id) throws Exception {
        Product product = productRepository.findById(id).orElseThrow(() -> new Exception("Product not available"));
        return product;
    }*/
   
}
