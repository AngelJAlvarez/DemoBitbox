package com.example.demo.controller;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import com.example.demo.dto.ItemDto;
import com.example.demo.dto.UserDto;
import com.example.demo.models.Item;
import com.example.demo.models.User;
import com.example.demo.models.enums.StateEnum;
import com.example.demo.repository.ItemRepository;
import com.example.demo.repository.SupplierRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.ItemService;
import com.example.demo.service.SupplierService;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;



@RestController

@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST,RequestMethod.PUT, RequestMethod.DELETE})
public class Controller {

    @Autowired
    private UserService userService;
    @Autowired
    private ItemService itemService;
    @Autowired
    private SupplierService supplierService;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ItemRepository itemRepository;
    @Autowired
    private SupplierRepository supplierRepository;


    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @GetMapping("/getUsers")
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @PreAuthorize("hasRole('ROLE_USER') OR hasRole('ROLE_ADMIN')")
    @GetMapping("/getItems")
    public List<Item> getItems() {
        return itemRepository.findAll();
    }

    @PreAuthorize("hasRole('ROLE_USER') OR hasRole('ROLE_ADMIN')")
    @GetMapping("/getActiveItems")
    public List<ItemDto> findActiveItems() {
        return itemService.searchByState(StateEnum.Active);
    }

    @PreAuthorize("hasRole('ROLE_USER') OR hasRole('ROLE_ADMIN')")
    @GetMapping("/getDiscontinuedItems")
    public List<ItemDto> findDiscontinuedItems( ) {
        return itemService.searchByState(StateEnum.Discontinued);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PostMapping("/createUser")
    public boolean createUser(@RequestBody UserDto userdto) {
        userService.createUser(userdto);

        return true;
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PostMapping("/createItem")
    public boolean createItem(@RequestBody ItemDto itemDto) {
        itemService.createItem(itemDto);
        return true;
    }

    @PreAuthorize("hasRole('ROLE_USER') OR hasRole('ROLE_ADMIN')")
    @PostMapping("/deleteItem")
    public boolean deleteItem(@RequestBody Long id) {
        itemService.deleteItem(id);
        return true;
    }

    @PreAuthorize("hasRole('ROLE_USER') OR hasRole('ROLE_ADMIN')")
    @PostMapping("/editItem")
    public boolean editeItem(@RequestBody ItemDto itemDto) {
        itemService.editItem(itemDto);
        return true;
    }

}