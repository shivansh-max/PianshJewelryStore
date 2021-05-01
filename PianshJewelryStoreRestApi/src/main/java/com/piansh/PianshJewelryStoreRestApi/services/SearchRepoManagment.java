package com.piansh.PianshJewelryStoreRestApi.services;

import com.piansh.PianshJewelryStoreRestApi.models.Jewelry;
import com.piansh.PianshJewelryStoreRestApi.repos.SearchJewelryRepo;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

@Service
@Slf4j
public class SearchRepoManagment {
    @Autowired
    SearchJewelryRepo searchRepo;

    public ArrayList<Jewelry> getSearchRepo(String where, String what) {
        log.info("Found them :)");
        switch (where) {
            case "brand":
                return searchRepo.brand(what);
            case "purchasedfrom":
                return searchRepo.purchasedfrom(what);
            case "nameofitem":
                return searchRepo.nameofitem(what);
            case "cost":
                return searchRepo.cost(what);
            case "orderid":
                return searchRepo.orderid(what);
            case "datapuchesed":
                return searchRepo.datapuchesed(what);
            case "weight":
                return searchRepo.weight(what);
            case "conditionofitem":
                return searchRepo.conditionofitem(what);
            case "metal":
                return searchRepo.metal(what);
            case "stone":
                return searchRepo.stone(what);
            case "quantity":
                return searchRepo.quantity(what);
            case "soldin":
                return searchRepo.soldin(what);
            case "salesprice":
                return searchRepo.salesprice(what);
            case "pandoraid":
                return searchRepo.pandoraid(what);
            default:
                return null;
        }
    }

}
