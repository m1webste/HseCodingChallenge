package com.hsecodingchallenge.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.hsecodingchallenge.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long>{

}