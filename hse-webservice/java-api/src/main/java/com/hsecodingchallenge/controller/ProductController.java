package com.hsecodingchallenge.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
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

    @RequestMapping(value="/product/insert", method=RequestMethod.POST)
    public Product insertProduct(@RequestBody Product product) {
        return productRepository.save(product);
    }

    @RequestMapping(value="/product/all", method=RequestMethod.GET)
    public List<Product> findAllProducts() {
        return productRepository.findAll();
    }

    @RequestMapping(value="/product/find", method=RequestMethod.GET)
	public List<Product> getProductsByName(@RequestParam String name) {
		return productRepository.findByName(name);
	}

    @RequestMapping(value="/product/delete/{id}", method=RequestMethod.GET)
    public void deleteProductById(@PathVariable long id) throws Exception {
        productRepository.deleteById(id);
    }

    @RequestMapping(value="/product/update", method=RequestMethod.POST)
    public Product updateProduct(@RequestBody Product product) throws Exception {

        if(product == null || product.getId() == null){
            throw new IllegalArgumentException();
        }

        Optional<Product> oldProduct = productRepository.findById(product.getId());
        if(oldProduct.isEmpty()){
            return insertProduct(product);
        }
        else{
            oldProduct.get().overrideWithNewInfo(product);
            return productRepository.save(oldProduct.get());
        }
    }

    
   
}
