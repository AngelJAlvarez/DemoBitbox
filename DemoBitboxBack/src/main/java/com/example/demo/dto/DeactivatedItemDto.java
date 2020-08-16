package com.example.demo.dto;

import com.example.demo.models.Item;
import com.example.demo.models.User;

public class DeactivatedItemDto {
    private Long id;

    private Item item;

    private User user;

    private String reasonForDeactivation;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Item getItem() {
        return item;
    }

    public void setItem(Item item) {
        this.item = item;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getReasonForDeactivation() {
        return reasonForDeactivation;
    }

    public void setReasonForDeactivation(String reasonForDeactivation) {
        this.reasonForDeactivation = reasonForDeactivation;
    }


}
