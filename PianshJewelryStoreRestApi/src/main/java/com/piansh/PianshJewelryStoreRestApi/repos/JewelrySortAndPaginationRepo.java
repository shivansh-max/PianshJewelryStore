package com.piansh.PianshJewelryStoreRestApi.repos;

import com.piansh.PianshJewelryStoreRestApi.models.Jewelry;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface JewelrySortAndPaginationRepo extends PagingAndSortingRepository<Jewelry, String > {
}
