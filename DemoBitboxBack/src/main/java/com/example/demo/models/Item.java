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
    @Column(unique = true)
    private int code;

    private Double price;

    @NotNull
    private String description;

    @Enumerated(EnumType.STRING)
    private StateEnum state;

    @ManyToMany
    private List<Supplier> suppliers;

    @OneToMany(cascade = CascadeType.ALL)
    private List<PriceReduction> priceReduction;

    private String creationDate;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn
    private User creator;

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

    public StateEnum getState() {
        return state;
    }

    public void setState(StateEnum state) {
        this.state = state;
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
