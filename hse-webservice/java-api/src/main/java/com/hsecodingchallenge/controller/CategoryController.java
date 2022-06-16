package com.hsecodingchallenge.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.hsecodingchallenge.model.Category;
import com.hsecodingchallenge.repository.CategoryRepository;

@RestController
public class CategoryController {

    @Autowired
    private CategoryRepository categoryRepository;

    @RequestMapping(value="/category/insert", method=RequestMethod.POST)
    public Category insertCategory(@RequestBody Category category) {
        return categoryRepository.save(category);
    }

    @RequestMapping(value="/category/all", method=RequestMethod.GET)
    public List<Category> findAllCategories() {
        return categoryRepository.findAll();
    }

    @RequestMapping(value="/category/{id}", method=RequestMethod.GET)
    public Category findCategoryById(@PathVariable long id) throws Exception {
        return categoryRepository.getReferenceById(id);
    }

    @RequestMapping(value="/category/delete/{id}", method=RequestMethod.GET)
    public void deleteCategoryById(@PathVariable long id) throws Exception {
        categoryRepository.deleteById(id);
    }

    @RequestMapping(value="/category/update", method=RequestMethod.POST)
    public Category updateCategory(@RequestBody Category category) throws Exception {

        if(category == null || category.getId() == null){
            throw new IllegalArgumentException();
        }

        Optional<Category> oldCategory = categoryRepository.findById(category.getId());
        if(oldCategory.isEmpty()){
            return insertCategory(category);
        }
        else{
            oldCategory.get().overrideWithNewInfo(category);
            return categoryRepository.save(oldCategory.get());
        }
    }
    
}
