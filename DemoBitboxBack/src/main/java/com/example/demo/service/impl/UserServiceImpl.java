package com.example.demo.service.impl;

import com.example.demo.Mapper.UserMapper;
import com.example.demo.dto.UserDto;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.demo.models.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import com.example.demo.converter.UserConverter;

import java.util.ArrayList;

@Service
public class UserServiceImpl implements UserService, UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserDto createUser(UserDto userDto) {
        userRepository.save(UserConverter.dtoToEntity(userDto));
        return null;
    }

    @Override
    public int deleteUser(int userId) {
        return 0;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        final User retrievedUser = userRepository.findByName(username);
        if (retrievedUser == null) {
            throw new UsernameNotFoundException("Invalid username or password");
        }
        return UserMapper.build(retrievedUser);
    }
}
