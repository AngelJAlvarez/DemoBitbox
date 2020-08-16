package com.example.demo.service;

import com.example.demo.dto.UserDto;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    public boolean createUser (UserDto userdto);
    public boolean editUser (UserDto userdto);
    public boolean deleteUser (Long userId);
}
