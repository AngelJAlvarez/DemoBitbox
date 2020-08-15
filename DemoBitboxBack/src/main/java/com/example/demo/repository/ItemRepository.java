package com.example.demo.repository;

import com.example.demo.dto.ItemDto;
import com.example.demo.models.Item;
import com.example.demo.models.User;
import com.example.demo.models.enums.StateEnum;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ItemRepository extends JpaRepository<Item, Long> {

    public List<Item> findByState(StateEnum stateEnum);
}
