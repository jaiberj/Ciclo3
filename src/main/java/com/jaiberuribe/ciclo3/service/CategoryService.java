/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.jaiberuribe.ciclo3.service;

import com.jaiberuribe.ciclo3.model.Category;
import com.jaiberuribe.ciclo3.repository.CategoryRepositorio;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class CategoryService {
    @Autowired
    private CategoryRepositorio categoryRepositorio;
    
     public List<Category> getAll() {
        return categoryRepositorio.getAll();
    }

    public Optional<Category> getCategory(int categoryId) {
        return categoryRepositorio.getCategory(categoryId);
    }

    public Category save(Category category) {
        if (category.getId() == null) {
            return categoryRepositorio.save(category);
        } else {
            Optional<Category> category1 = categoryRepositorio.getCategory(category.getId());
            if (category1.isEmpty()) {
                return categoryRepositorio.save(category);
            } else {
                return category;
            }
        }
    }
    
    public Category update(Category category){
        if(category.getId()!=null){
            Optional<Category>g= categoryRepositorio.getCategory(category.getId());
            if(!g.isEmpty()){
                if(category.getDescription()!=null){
                    g.get().setDescription(category.getDescription());
                }
                if(category.getName()!=null){
                    g.get().setName(category.getName());
                }
                return categoryRepositorio.save(g.get());
            }
        }
        return category;
    }
    
    
    public boolean deleteCategory (int id){
        Boolean d = getCategory(id).map(category -> {
            categoryRepositorio.delete(category);
            return true;
        }).orElse(false);
        return d;
    }
    
   
    
  
}
