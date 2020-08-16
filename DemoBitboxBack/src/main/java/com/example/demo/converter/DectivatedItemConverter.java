package com.example.demo.converter;

import com.example.demo.dto.DeactivatedItemDto;
import com.example.demo.models.DeactivatedItem;

import java.util.ArrayList;
import java.util.List;

public class DectivatedItemConverter {

    public static DeactivatedItem dtoToEntity(DeactivatedItemDto deactivatedItemDto) {
        DeactivatedItem deactivatedItem = new DeactivatedItem();
        deactivatedItem.setId(deactivatedItemDto.getId());
        deactivatedItem.setItem(deactivatedItemDto.getItem());
        deactivatedItem.setUser(deactivatedItemDto.getUser());
        deactivatedItem.setDeactivationReason(deactivatedItemDto.getReasonForDeactivation());
        return  deactivatedItem;
    }

    public static DeactivatedItemDto EntityToDto (DeactivatedItem deactivatedItem) {
        DeactivatedItemDto deactivatedItemDto = new DeactivatedItemDto();

        deactivatedItemDto.setId(deactivatedItem.getId());
        deactivatedItemDto.setItem(deactivatedItem.getItem());
        deactivatedItemDto.setUser(deactivatedItem.getUser());
        deactivatedItemDto.setReasonForDeactivation(deactivatedItem.getDeactivationReason());
        return  deactivatedItemDto;
    }

    public static List<DeactivatedItemDto> entitiesToDtos(List<DeactivatedItem> deactivatedItems) {
        List<DeactivatedItemDto> deactivatedItemDtos = new ArrayList<>();
        for(DeactivatedItem deactivatedItem: deactivatedItems) {
            deactivatedItemDtos.add(EntityToDto(deactivatedItem));
        }
        return deactivatedItemDtos;
    }
}
