package com.piansh.PianshJewelryStoreRestApi.services;

import com.piansh.PianshJewelryStoreRestApi.models.Jewelry;
import com.piansh.PianshJewelryStoreRestApi.repos.JewelryMainRepo;
import com.piansh.PianshJewelryStoreRestApi.repos.JewelrySortAndPaginationRepo;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

@Service
@Slf4j
public class PaginationSortJewelryManagement {

    // AutoWired Items That I Need For There Functionality

    @Autowired
    JewelrySortAndPaginationRepo jewelrySortAndPaginationRepo;

    @Autowired
    JewelryMainRepo jewelryMainRepo;

    // Pagination

    public Page<Jewelry> pagination(int size, int page) {
        log.info("Got all of paginatited Items Asked :)");
        Pageable pageable = PageRequest.of(page, size);
        return jewelrySortAndPaginationRepo.findAll(pageable);
    }

    // Sort

    public Page<Jewelry> sortAll(String whatToSort, boolean ascending) {
        log.info("Sorted the items :)");
        int size = jewelryMainRepo.findAll().size();

        Pageable pageable;

        switch (whatToSort) {
            case "brand":
                pageable = PageRequest.of(0, size, Sort.by("brand"));

            case "purchasedfrom":
                pageable = PageRequest.of(0, size, Sort.by("purchasedfrom"));

            case "nameofitem":
                pageable = PageRequest.of(0, size, Sort.by("nameofitem"));
                
            case "cost":
                if (ascending) {
                    pageable = PageRequest.of(0, size, Sort.by("cost").ascending());
                }else {
                    pageable = PageRequest.of(0, size, Sort.by("cost").descending());
                }
                
            case "orderid":
                pageable = PageRequest.of(0, size, Sort.by("orderid"));

            case "datapuchesed":
                pageable = PageRequest.of(0, size, Sort.by("datapuchesed"));

                //int
            case "weight":
                if (ascending) {
                    pageable = PageRequest.of(0, size, Sort.by("weight").ascending());
                } else {
                    pageable = PageRequest.of(0, size, Sort.by("weight").descending());
                }
                

            case "conditionofitem":
                pageable = PageRequest.of(0, size, Sort.by("cost"));

            case "metal":
                pageable = PageRequest.of(0, size, Sort.by("orderid"));

            case "stone":
                pageable = PageRequest.of(0, size, Sort.by("datapuchesed"));
                
            case "quantity":
                if (ascending) {
                    pageable = PageRequest.of(0, size, Sort.by("weight").ascending());
                }else {
                    pageable = PageRequest.of(0, size, Sort.by("weight").descending());
                }
                
            case "soldin":
                pageable = PageRequest.of(0, size, Sort.by("datapuchesed"));
                
            case "salesprice":
            if (ascending) {
                pageable = PageRequest.of(0, size, Sort.by("salesprice").ascending());
            }else {
                pageable = PageRequest.of(0, size, Sort.by("salesprice").descending());
            }
                    
            case "pandoraid":
                pageable = PageRequest.of(0, size, Sort.by("pandoraid"));

                break;
            default:
                throw new IllegalStateException("Unexpected value: " + whatToSort);
        }
        
        return jewelrySortAndPaginationRepo.findAll(pageable);
    }

    // Paginate - Sort
    public Page<Jewelry> sortPaginate(String whatToSort, boolean ascending, int size, int page){
        log.info("Sorted the items and paginated them :)");

        Pageable pageable;

        switch (whatToSort) {
            case "brand":
                pageable = PageRequest.of(page, size, Sort.by("brand"));

            case "purchasedfrom":
                pageable = PageRequest.of(page, size, Sort.by("purchasedfrom"));

            case "nameofitem":
                pageable = PageRequest.of(page, size, Sort.by("nameofitem"));

            case "cost":
                if (ascending) {
                    pageable = PageRequest.of(page, size, Sort.by("cost").ascending());
                }else {
                    pageable = PageRequest.of(page, size, Sort.by("cost").descending());
                }

            case "orderid":
                pageable = PageRequest.of(page, size, Sort.by("orderid"));

            case "datapuchesed":
                pageable = PageRequest.of(page, size, Sort.by("datapuchesed"));

                //int
            case "weight":
                if (ascending) {
                    pageable = PageRequest.of(page, size, Sort.by("weight").ascending());
                } else {
                    pageable = PageRequest.of(page, size, Sort.by("weight").descending());
                }


            case "conditionofitem":
                pageable = PageRequest.of(page, size, Sort.by("cost"));

            case "metal":
                pageable = PageRequest.of(page, size, Sort.by("orderid"));

            case "stone":
                pageable = PageRequest.of(page, size, Sort.by("datapuchesed"));

            case "quantity":
                if (ascending) {
                    pageable = PageRequest.of(page, size, Sort.by("weight").ascending());
                }else {
                    pageable = PageRequest.of(page, size, Sort.by("weight").descending());
                }

            case "soldin":
                pageable = PageRequest.of(page, size, Sort.by("datapuchesed"));

            case "salesprice":
                if (ascending) {
                    pageable = PageRequest.of(page, size, Sort.by("salesprice").ascending());
                }else {
                    pageable = PageRequest.of(page, size, Sort.by("salesprice").descending());
                }

            case "pandoraid":
                pageable = PageRequest.of(page, size, Sort.by("pandoraid"));

                break;
            default:
                throw new IllegalStateException("Unexpected value: " + whatToSort);
        }

        return jewelrySortAndPaginationRepo.findAll(pageable);
    }
}
