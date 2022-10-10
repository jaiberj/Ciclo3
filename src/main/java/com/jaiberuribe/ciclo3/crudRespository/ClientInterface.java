package com.jaiberuribe.ciclo3.crudRespository;

import com.jaiberuribe.ciclo3.model.Client;
import org.springframework.data.repository.CrudRepository;


public interface ClientInterface  extends CrudRepository <Client, Integer>{
    
}
