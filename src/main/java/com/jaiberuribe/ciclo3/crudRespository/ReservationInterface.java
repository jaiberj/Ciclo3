package com.jaiberuribe.ciclo3.crudRespository;

import com.jaiberuribe.ciclo3.model.Reservation;
import org.springframework.data.repository.CrudRepository;


public interface ReservationInterface extends CrudRepository <Reservation, Integer> {
    
}
