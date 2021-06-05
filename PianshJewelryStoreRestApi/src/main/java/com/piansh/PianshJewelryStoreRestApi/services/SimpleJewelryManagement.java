package com.piansh.PianshJewelryStoreRestApi.services;


import com.piansh.PianshJewelryStoreRestApi.models.Jewelry;
import com.piansh.PianshJewelryStoreRestApi.repos.JewelryMainRepo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.apache.velocity.exception.ResourceNotFoundException;

import java.util.List;


@Service
@Slf4j
public class SimpleJewelryManagement {

    // AutoWired Items That I Need For There Functionality
    @Autowired
    JewelryMainRepo jewelryMainRepo;



    // GETS :

    // Get All Jewelries
    public List<Jewelry> getAll() {
         log.info("Alright I think that I found some items for you :)");
        return jewelryMainRepo.findAll();
    }

    // Get One Jewelry
    public Jewelry getOne(String id) {

         log.info("I found the things that you want :)");
         log.error("Could not find the things that you want :(");

        return jewelryMainRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Could not find the things that you want :("));
    }

    // DELETES :

    // Delete All
    public String deleteAll() {

         log.info("Got rid of all of them !!!");

        jewelryMainRepo.deleteAll();
        return "Got rid of all of them !!!";
    }

    // Delete One
    public List<Jewelry> deleteOne(String id) {
         log.info("So I could find it so here is all of them left :)");
         log.error("So I couldn't find it but here is all of them :(");

        jewelryMainRepo.deleteById(id);

        return jewelryMainRepo.findAll();
    }



    // PUT :

    // Main Put Function
    public List<Jewelry> editOneJewelry(String id, Jewelry jewelry) {

         log.info("Edited your item here is all of them :)");

         log.error("Couldn't edited your item here is all of them :)");

        Jewelry oldJewelry = jewelryMainRepo.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Couldn't edited your item here is all of them :)"));

        oldJewelry = jewelry;

        Jewelry updatedItem = jewelryMainRepo.save(oldJewelry);
        return jewelryMainRepo.findAll();
    }



    // POST :

    // Main Post Function
    public List<Jewelry> addOneJewelry(Jewelry jewelry) {
         log.info("Saved the jewelry you gave me :)");

        jewelryMainRepo.save(jewelry);

        return jewelryMainRepo.findAll();
    }


}
