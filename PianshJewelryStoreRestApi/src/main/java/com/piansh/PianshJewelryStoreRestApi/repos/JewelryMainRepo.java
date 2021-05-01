package com.piansh.PianshJewelryStoreRestApi.repos;

import com.piansh.PianshJewelryStoreRestApi.models.Jewelry;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JewelryMainRepo extends JpaRepository<Jewelry, String> {
    // This is the repo that will handle all of the basic stuff for me
}
