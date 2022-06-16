package com.hsecodingchallenge.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hsecodingchallenge.model.Category;
import com.hsecodingchallenge.repository.CategoryRepository;

@RestController
@RequestMapping("/category")
public class CategoryController {

    @Autowired
    private CategoryRepository categoryRepository;

    @PostMapping
    public Category saveCategory(@RequestBody Category category) {
        return categoryRepository.save(category);
    }

    @GetMapping
    public List<Category> findAllCategories() {
        return categoryRepository.findAll();
    }

    @GetMapping("/{id}")
    public Category findCategory(@PathVariable long id) throws Exception {
        Category category = categoryRepository.findById(id).orElseThrow(() -> new Exception("Category not available"));
        return category;
    }
    
}
