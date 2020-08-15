package com.example.demo.dto;

import com.example.demo.models.PriceReduction;
import com.example.demo.models.Supplier;
import com.example.demo.models.User;
import com.example.demo.models.enums.StateEnum;

import java.util.List;

public class ItemDto {
    private Long id;

    private int code;

    private String description;

    private StateEnum state;

    private List<Supplier> suppliers ;

    private List<PriceReduction> priceReduction;

    private double price;

    private String creationDate;

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    private User creator;

    private String reasonForDeactivation;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<Supplier> getSuppliers() {
        return suppliers;
    }

    public StateEnum getState() {
        return state;
    }

    public void setState(StateEnum state) {
        this.state = state;
    }

    public void setSuppliers(List<Supplier> suppliers) {
        this.suppliers = suppliers;
    }

    public List<PriceReduction> getPriceReduction() {
        return priceReduction;
    }

    public void setPriceReduction(List<PriceReduction> priceReduction) {
        this.priceReduction = priceReduction;
    }

    public String getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(String creationDate) {
        this.creationDate = creationDate;
    }

    public User getCreator() {
        return creator;
    }

    public void setCreator(User creator) {
        this.creator = creator;
    }

    public String getReasonForDeactivation() {
        return reasonForDeactivation;
    }

    public void setReasonForDeactivation(String reasonForDeactivation) {
        this.reasonForDeactivation = reasonForDeactivation;
    }


}
