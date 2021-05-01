package com.piansh.PianshJewelryStoreRestApi.repos;

import com.piansh.PianshJewelryStoreRestApi.models.Jewelry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.ArrayList;

public interface SearchJewelryRepo extends JpaRepository<Jewelry, String> {
    @Query(value = " select * from jewelry  where brand like :what", nativeQuery = true)
    ArrayList<Jewelry> brand(@Param(value = "what") String what);

    @Query(value = " select * from jewelry  where purchasedfrom like :what", nativeQuery = true)
    ArrayList<Jewelry> purchasedfrom(@Param(value = "what") String what);

    @Query(value = " select * from jewelry  where nameofitem like :what", nativeQuery = true)
    ArrayList<Jewelry> nameofitem(@Param(value = "what") String what);

    @Query(value = " select * from jewelry  where cost like :what", nativeQuery = true)
    ArrayList<Jewelry> cost(@Param(value = "what") String what);

    @Query(value = " select * from jewelry  where orderid like :what", nativeQuery = true)
    ArrayList<Jewelry> orderid(@Param(value = "what") String what);

    @Query(value = " select * from jewelry  where datapuchesed like :what", nativeQuery = true)
    ArrayList<Jewelry> datapuchesed(@Param(value = "what") String what);

    @Query(value = " select * from jewelry  where weight like :what", nativeQuery = true)
    ArrayList<Jewelry> weight(@Param(value = "what") String what);

    @Query(value = " select * from jewelry  where conditionofitem like :what", nativeQuery = true)
    ArrayList<Jewelry> conditionofitem(@Param(value = "what") String what);

    @Query(value = " select * from jewelry  where metal like :what", nativeQuery = true)
    ArrayList<Jewelry> metal(@Param(value = "what") String what);

    @Query(value = " select * from jewelry  where stone like :what", nativeQuery = true)
    ArrayList<Jewelry> stone(@Param(value = "what") String what);

    @Query(value = " select * from jewelry  where quantity like :what", nativeQuery = true)
    ArrayList<Jewelry> quantity(@Param(value = "what") String what);

    @Query(value = " select * from jewelry  where soldin like :what", nativeQuery = true)
    ArrayList<Jewelry> soldin(@Param(value = "what") String what);

    @Query(value = " select * from jewelry  where salesprice like :what", nativeQuery = true)
    ArrayList<Jewelry> salesprice(@Param(value = "what") String what);

    @Query(value = " select * from jewelry  where pandoraid like :what", nativeQuery = true)
    ArrayList<Jewelry> pandoraid(@Param(value = "what") String what);

}
