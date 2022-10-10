/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.jaiberuribe.ciclo3.service;

import com.jaiberuribe.ciclo3.model.Message;
import com.jaiberuribe.ciclo3.repository.MessageRepositorio;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service

public class MessageService {
    @Autowired
    private MessageRepositorio messageRepository;

    public List<Message> getAll(){
        return messageRepository.getAll();
    }

    public Optional<Message> getMessage(int messageId) {
        return messageRepository.getMessage(messageId);
    }

    public Message save(Message message){
        if(message.getIdMessage()==null){
            return messageRepository.save(message);
        }else{
            Optional<Message> e= messageRepository.getMessage(message.getIdMessage());
            if(e.isEmpty()){
                return messageRepository.save(message);
            }else{
                return message;
            }
        }
    }
     public Message update(Message message){
        if(message.getIdMessage()!=null){
            Optional<Message> e= messageRepository.getMessage(message.getIdMessage());
            if(!e.isEmpty()){
                if(message.getMessageText()!=null){
                    e.get().setMessageText(message.getMessageText());
                }
                messageRepository.save(e.get());
                return e.get();
            }else{
                return message;
            }
        }else{
            return message;
        }
    }
    
    public boolean deleteMessage (int id){
        Boolean d = getMessage(id).map(message -> {
            messageRepository.delete(message);
            return true;
        }).orElse(false);
        return d;
    }
    
    
  
}
