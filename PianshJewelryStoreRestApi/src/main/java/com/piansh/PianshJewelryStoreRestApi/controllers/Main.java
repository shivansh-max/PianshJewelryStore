package com.piansh.PianshJewelryStoreRestApi.controllers;

import com.piansh.PianshJewelryStoreRestApi.models.Jewelry;
import com.piansh.PianshJewelryStoreRestApi.repos.JewelryMainRepo;
import com.piansh.PianshJewelryStoreRestApi.repos.JewelrySortAndPaginationRepo;
import com.piansh.PianshJewelryStoreRestApi.repos.SearchJewelryRepo;
import com.piansh.PianshJewelryStoreRestApi.services.PaginationSortJewelryManagement;
import com.piansh.PianshJewelryStoreRestApi.services.SearchRepoManagment;
import com.piansh.PianshJewelryStoreRestApi.services.SimpleJewelryManagement;

import net.bytebuddy.dynamic.loading.PackageDefinitionStrategy;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@RestController
@Transactional
@RequestMapping(value = "/piansh", method = {RequestMethod.GET, RequestMethod.POST, RequestMethod.DELETE, RequestMethod.PUT})
public class Main {
    @Autowired
    SimpleJewelryManagement simpleJewelryManagement;

    @Autowired
    SearchRepoManagment searchRepoManagment;

    @Autowired
    PaginationSortJewelryManagement paginationSortJewelryManagement;


    // ALL GETS :

    // Get All
    @GetMapping("/getall")
    public List<Jewelry> getAll() {
        return simpleJewelryManagement.getAll();
    }

    // Get One
    @GetMapping(value = "/getOne")
    public Jewelry getOne(@RequestParam(value = "id") String id) {
        return simpleJewelryManagement.getOne(id);
    }

    // Search
    @GetMapping(value = "/search")
    public ArrayList<Jewelry> getSearchRepo(@RequestParam(value = "where") String where,
                                            @RequestParam(value = "what") String what) {
        return searchRepoManagment.getSearchRepo(where, what);
    }

    // Pagination
    @GetMapping(value = "/pagination")
    public Page<Jewelry> pagination(@RequestParam(value = "size") int size,
                                    @RequestParam(value = "page") int page) {
        return paginationSortJewelryManagement.pagination(size, page);
    }

    // Sort
    @GetMapping(value = "/sort")
    public Page<Jewelry> sortAll(@RequestParam(value = "whatToSort") String whatToSort,
                                 @RequestParam(value = "ascending") boolean asceding) {
        return paginationSortJewelryManagement.sortAll(whatToSort, asceding);
    }

    // Pagination - Sort
    @GetMapping(value = "/paginationSort")
    public Page<Jewelry> sortPagination(@RequestParam(value = "what") String whatToSort,
                                        @RequestParam(value = "ascending") boolean ascending,
                                        @RequestParam(value = "size") int size,
                                        @RequestParam(value = "page") int page) {
        return paginationSortJewelryManagement.sortPaginate(whatToSort, ascending, size, page);
    }

    // Password :
    @GetMapping(value = "/passwords")
    public List<String> passwords() {
        List<String> pass = new ArrayList<String>();

        pass.add("Isha");
        pass.add("MamaIsAwesome");

        return pass;
    }


    // ALL DELETES :

    // Delete All
    @DeleteMapping("/deleteAll")
    public String deleteAll() {
        return simpleJewelryManagement.deleteAll();
    }


    // Delete One
    @DeleteMapping("/deleteOne")
    public List<Jewelry> deleteOne(@RequestParam("id") String id) {
        return simpleJewelryManagement.deleteOne(id);
    }


    // PUT :
    @PutMapping("/edit")
    public List<Jewelry> editOneJewelry(@RequestParam("id") String id, @RequestBody Jewelry jewelry) {
        return simpleJewelryManagement.editOneJewelry(id, jewelry);
    }


    // POST :
    @PostMapping("/add")
    public List<Jewelry> addOneJewelry(@RequestBody Jewelry jewelry) {
        return simpleJewelryManagement.addOneJewelry(jewelry);
    }
}
