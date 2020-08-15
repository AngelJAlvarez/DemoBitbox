package com.example.demo.service;

import java.util.List;

import com.example.demo.dto.ItemDto;
import com.example.demo.models.Item;
import com.example.demo.models.enums.StateEnum;
import org.springframework.stereotype.Service;


@Service
public interface ItemService {

    public List<ItemDto> searchByState(StateEnum State);

    public ItemDto deactivateItem(ItemDto itemDto, String reason);

    public Item createItem (ItemDto itemDto);

    public void deleteItem(Long id);

    public Boolean editItem (ItemDto itemDto);
}
