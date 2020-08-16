package com.example.demo.converter;

import com.example.demo.dto.UserDto;
import com.example.demo.models.User;

import java.util.ArrayList;
import java.util.List;

public class UserConverter {

    public static User dtoToEntity(UserDto userDto) {
        User UserEntity = new User();

        UserEntity.setId(userDto.getId());
        UserEntity.setName(userDto.getName());
        UserEntity.setPassword(userDto.getPassword());
        UserEntity.setRoles(userDto.getRoles());
        return  UserEntity;
    }

    public static UserDto entityToDto(User userEntity) {
        UserDto userDto = new UserDto();

        userDto.setId(userEntity.getId());
        userDto.setName(userEntity.getName());
        userDto.setPassword("Secret");
        userDto.setRoles(userEntity.getRoles());
        return  userDto;
    }

    public static List<UserDto> entitiesToDtos(List<User> users) {
        List<UserDto> usersDtoList = new ArrayList<>();
        for(User user: users) {
            usersDtoList.add(entityToDto(user));
        }
        return usersDtoList;
    }
}
