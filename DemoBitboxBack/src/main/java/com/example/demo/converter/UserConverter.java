package com.example.demo.converter;

import com.example.demo.dto.UserDto;
import com.example.demo.models.User;

public class UserConverter {

    public static User dtoToEntity(UserDto userDto) {
        User UserEntity = new User();

        UserEntity.setId(userDto.getId());
        UserEntity.setName(userDto.getName());
        UserEntity.setPassword(userDto.getPassword());
        UserEntity.setRoles(userDto.getRoles());
        return  UserEntity;
    }

    public static UserDto EntityToDto (User userEntity) {
        UserDto userDto = new UserDto();

        userDto.setId(userEntity.getId());
        userDto.setName(userEntity.getName());
        userDto.setPassword(userEntity.getPassword());
        userDto.setRoles(userEntity.getRoles());
        return  userDto;
    }
}
