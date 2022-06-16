package com.hsecodingchallenge.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.hsecodingchallenge.model.Category;

public interface CategoryRepository extends JpaRepository<Category, Long>{
    
}
