package com.example.demo.models;

import com.example.demo.models.enums.StateEnum;
import com.sun.istack.NotNull;

import javax.persistence.*;
// Exist other date in java.utils
import java.sql.Date;
import java.util.List;

@Entity
public class Item {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    private int code;

    private Double price;

    @NotNull
    private String description;

    @Enumerated(EnumType.STRING)
    private StateEnum state;

    @ManyToMany
    private List<Supplier> suppliers;

    @OneToMany
    private List<PriceReduction> priceReduction;

    private String creationDate;

    @ManyToOne
    @JoinColumn(nullable = false)
    private User creator;

    private String reasonForDeactivation;

    public List<Supplier> getSuppliers() {
        return suppliers;
    }

    public void setSuppliers(List<Supplier> suppliers) {
        this.suppliers = suppliers;
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

    public StateEnum getState() {
        return state;
    }

    public void setState(StateEnum state) {
        this.state = state;
    }

    public void setReasonForDeactivation(String reasonForDeactivation) {
        this.reasonForDeactivation = reasonForDeactivation;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

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


    public String getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(String creationDate) {
        this.creationDate = creationDate;
    }

    public List<PriceReduction> getPriceReduction() {
        return priceReduction;
    }

    public void setPriceReduction(List<PriceReduction> priceReduction) {
        this.priceReduction = priceReduction;
    }



}
