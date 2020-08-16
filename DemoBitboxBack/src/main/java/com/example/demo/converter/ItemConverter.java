package com.example.demo.converter;

import com.example.demo.dto.ItemDto;
import com.example.demo.models.Item;

import java.util.ArrayList;
import java.util.List;

public class ItemConverter {

    public static Item dtoToEntity(ItemDto ItemDto) {
        Item itemEntity = new Item();

        itemEntity.setId(ItemDto.getId());
        itemEntity.setCode(ItemDto.getCode());
        itemEntity.setCreationDate(ItemDto.getCreationDate());
        itemEntity.setDescription(ItemDto.getDescription());
        itemEntity.setPriceReduction(ItemDto.getPriceReduction());
        itemEntity.setPrice(ItemDto.getPrice());
        itemEntity.setState(ItemDto.getState());
        itemEntity.setCreator(ItemDto.getCreator());
        itemEntity.setSuppliers(ItemDto.getSuppliers());
        return  itemEntity;
    }

    public static ItemDto entityToDto (Item ItemEntity) {
        ItemDto itemDto = new ItemDto();

        itemDto.setId(ItemEntity.getId());
        itemDto.setCode(ItemEntity.getCode());
        itemDto.setCreationDate(ItemEntity.getCreationDate());
        itemDto.setDescription(ItemEntity.getDescription());
        itemDto.setPriceReduction(ItemEntity.getPriceReduction());
        itemDto.setState(ItemEntity.getState());
        itemDto.setPrice(ItemEntity.getPrice());;
        itemDto.setCreator(ItemEntity.getCreator());
        itemDto.setSuppliers(ItemEntity.getSuppliers());
        return itemDto;

    }

    public static List<ItemDto> entitiesToDtos(List<Item> items) {
        List<ItemDto> itemsDtoList = new ArrayList<>();
        for(Item item: items) {
            itemsDtoList.add(entityToDto(item));
        }
        return itemsDtoList;
    }
}
