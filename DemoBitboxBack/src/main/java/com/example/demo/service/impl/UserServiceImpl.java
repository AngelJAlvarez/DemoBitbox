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

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService, UserDetailsService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public boolean createUser(UserDto userDto) {
        userRepository.save(UserConverter.dtoToEntity(userDto));
        return true;
    }

    @Override
    public boolean editUser(UserDto userdto) {
        User user = UserConverter.dtoToEntity(userdto);
        Optional<User> user2 = userRepository.findById(user.getId());
        user.setPassword(user2.get().getPassword());
        userRepository.save(user);
        return true;
    }

    @Override
    public boolean deleteUser(Long userId) {
        userRepository.deleteById(userId);
        return true;
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
