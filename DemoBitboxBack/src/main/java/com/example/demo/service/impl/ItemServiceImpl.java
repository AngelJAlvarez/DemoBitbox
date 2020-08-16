package com.example.demo.service.impl;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import com.example.demo.converter.DectivatedItemConverter;
import com.example.demo.dto.DeactivatedItemDto;
import com.example.demo.dto.ItemDto;
import com.example.demo.models.DeactivatedItem;
import com.example.demo.models.Item;
import com.example.demo.models.User;
import com.example.demo.models.enums.StateEnum;
import com.example.demo.repository.DeactivatedItemRepository;
import com.example.demo.repository.ItemRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.ItemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

// Helper
import com.example.demo.converter.ItemConverter;

@Service
public class ItemServiceImpl implements ItemService {

    @Autowired
    private ItemRepository itemRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private DeactivatedItemRepository deactivatedItemRepository;

    @Override
    public Item createItem(ItemDto itemDto) {
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd");
        LocalDateTime now = LocalDateTime.now();
        itemDto.setCreationDate(dtf.format(now));
        itemDto.setState(StateEnum.Active);
        itemDto.setCreator(userRepository.findByName(itemDto.getCreator().getName()));
        return itemRepository.save(ItemConverter.dtoToEntity(itemDto));
    }

    @Override
    public void deleteItem(Long id) {
       itemRepository.deleteById(id);
    }

    @Override
    public Boolean editItem(ItemDto itemDto) {
        Item item = ItemConverter.dtoToEntity(itemDto);
        itemRepository.save(item);
        return true;
    }

    @Override
    public List<ItemDto> searchByState(StateEnum stateEnum) {
        return ItemConverter.entitiesToDtos(itemRepository.findByState(stateEnum));
    }

    @Override
    public ItemDto deactivateItem(DeactivatedItemDto deactivatedItemDto) {
        deactivatedItemDto.setUser(userRepository.findByName(deactivatedItemDto.getUser().getName()));
        Item item = deactivatedItemDto.getItem();
        item.setState(StateEnum.Discontinued);
        itemRepository.save(item);
        DeactivatedItem deactivatedItem = DectivatedItemConverter.dtoToEntity(deactivatedItemDto);
        deactivatedItemRepository.save(deactivatedItem);
        return null;
    }

}
