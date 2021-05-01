package com.piansh.PianshJewelryStoreRestApi.models;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.AllArgsConstructor;
import lombok.Builder;

import javax.persistence.Entity;
import javax.persistence.Id;


//Annotations lombok annotations do most of the basic stuff for me
@Getter
@Setter
@NoArgsConstructor
@Entity
@AllArgsConstructor
@Builder

//Model to define the type basically a blue print
public class Jewelry {
    @Id
    String id;

    String brand;
    String purchasedfrom;
    String nameofitem;
    int cost;
    String orderid;
    String datapuchesed;
    int weight;
    String conditionofitem;
    String metal;
    String stone;
    int quantity;
    String soldin;
    int salesprice;
    String pandoraid;
    String filler1;
    String filler2;
    String filler3;
}