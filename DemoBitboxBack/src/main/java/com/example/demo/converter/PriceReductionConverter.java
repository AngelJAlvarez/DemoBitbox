package com.example.demo.converter;

import com.example.demo.dto.PriceReductionDto;
import com.example.demo.dto.UserDto;
import com.example.demo.models.PriceReduction;
import com.example.demo.models.User;

import java.util.ArrayList;
import java.util.List;

public class PriceReductionConverter {

    public static PriceReduction dtoToEntity(PriceReductionDto priceReductionDto) {
        PriceReduction PriceReductionEntity = new PriceReduction();
        PriceReductionEntity.setEndDate(priceReductionDto.getEndDate());
        PriceReductionEntity.setId(priceReductionDto.getId());
        PriceReductionEntity.setReducedPrice(priceReductionDto.getReducedPrice());
        PriceReductionEntity.setStartDate(priceReductionDto.getStartDate());
        return  PriceReductionEntity;
    }

    public static PriceReductionDto entityToDto(PriceReduction priceReduction) {
        PriceReductionDto priceReductionDto = new PriceReductionDto();
        priceReductionDto.setEndDate(priceReduction.getEndDate());
        priceReductionDto.setId(priceReduction.getId());
        priceReductionDto.setReducedPrice(priceReduction.getReducedPrice());
        priceReductionDto.setStartDate(priceReduction.getStartDate());
        return  priceReductionDto;
    }

    public static List<PriceReductionDto> entitiesToDtos(List<PriceReduction> priceReductionList) {
        List<PriceReductionDto> priceReductionDtoList = new ArrayList<>();
        for(PriceReduction priceReduction: priceReductionList) {
            priceReductionDtoList.add(entityToDto(priceReduction));
        }
        return priceReductionDtoList;
    }
}
