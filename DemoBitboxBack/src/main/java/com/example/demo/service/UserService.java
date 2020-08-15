package com.example.demo.service;

import com.example.demo.dto.UserDto;
import com.example.demo.models.User;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    public UserDto createUser (UserDto userdto);

    public int deleteUser (int userId);
}
