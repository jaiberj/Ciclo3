package com.jaiberuribe.ciclo3.crudRespository;

import com.jaiberuribe.ciclo3.model.Message;
import org.springframework.data.repository.CrudRepository;


public interface MessageInterface extends CrudRepository <Message, Integer> {
    
}
