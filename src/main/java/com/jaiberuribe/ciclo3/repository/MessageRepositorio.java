
package com.jaiberuribe.ciclo3.repository;

import com.jaiberuribe.ciclo3.crudRespository.MessageInterface;
import com.jaiberuribe.ciclo3.model.Message;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


@Repository

public class MessageRepositorio {

    @Autowired
    private MessageInterface messageCrudRepository;

    public List<Message> getAll() {
        return (List<Message>) messageCrudRepository.findAll();
    }

    public Optional<Message> getMessage(int id) {
        return messageCrudRepository.findById(id);
    }

    public Message save(Message message) {
        return messageCrudRepository.save(message);
    }
     
    public void delete(Message message){
        messageCrudRepository.delete(message);
    }
    
    
   
}
