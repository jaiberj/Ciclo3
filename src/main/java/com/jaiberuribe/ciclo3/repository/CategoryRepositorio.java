
package com.jaiberuribe.ciclo3.repository;

import com.jaiberuribe.ciclo3.crudRespository.CategoryInterface;
import com.jaiberuribe.ciclo3.model.Category;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class CategoryRepositorio {
    @Autowired
    private CategoryInterface categoryCrudRepository;
    
    public List<Category> getAll(){
        return (List<Category>) categoryCrudRepository.findAll();
    }
    
    public Optional<Category> getCategory(int id){
        return categoryCrudRepository.findById(id);
    }

    public Category save(Category category){
        return categoryCrudRepository.save(category);
    }
    
    public void delete(Category category){
        categoryCrudRepository.delete(category);
    }
    
   
    
}
