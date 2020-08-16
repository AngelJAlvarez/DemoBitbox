package com.example.demo.controller;

import com.example.demo.converter.PriceReductionConverter;
import com.example.demo.converter.UserConverter;
import com.example.demo.dto.DeactivatedItemDto;
import com.example.demo.dto.ItemDto;
import com.example.demo.dto.PriceReductionDto;
import com.example.demo.dto.UserDto;
import com.example.demo.models.Item;
import com.example.demo.models.PriceReduction;
import com.example.demo.models.Supplier;
import com.example.demo.models.enums.StateEnum;
import com.example.demo.repository.ItemRepository;
import com.example.demo.repository.PriceReductionRepository;
import com.example.demo.repository.SupplierRepository;
import com.example.demo.repository.UserRepository;
import com.example.demo.service.ItemService;
import com.example.demo.service.SupplierService;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;


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
    @Autowired
    private PriceReductionRepository priceReductionRepository;



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
    @PostMapping("/createItem")
    public boolean createItem(@RequestBody ItemDto itemDto) {
        itemService.createItem(itemDto);
        return true;
    }

    @PreAuthorize("hasRole('ROLE_USER') OR hasRole('ROLE_ADMIN')")
    @PostMapping("/editItem")
    public boolean editItem(@RequestBody ItemDto itemDto) {
        itemService.editItem(itemDto);
        return true;
    }

    @PreAuthorize("hasRole('ROLE_USER') OR hasRole('ROLE_ADMIN')")
    @PostMapping("/deleteItem")
    public boolean deleteItem(@RequestBody Long id) {
        itemService.deleteItem(id);
        return true;
    }

    @PreAuthorize("hasRole('ROLE_USER') OR hasRole('ROLE_ADMIN')")
    @GetMapping("/getPriceReduction")
    public List<PriceReductionDto> getPriceReduction() {
        return PriceReductionConverter.entitiesToDtos(priceReductionRepository.findAll());
    }

    @PreAuthorize("hasRole('ROLE_USER') OR hasRole('ROLE_ADMIN')")
    @GetMapping("/getSupplier")
    public List<Supplier> getSupplier() {
        return supplierRepository.findAll();
    }

    @PreAuthorize("hasRole('ROLE_USER') OR hasRole('ROLE_ADMIN')")
    @PostMapping("/deactivateItem")
    public boolean deactivateItem(@RequestBody DeactivatedItemDto deactivatedItemDto) {
        itemService.deactivateItem(deactivatedItemDto);
        return true;
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PostMapping("/editUser")
    public boolean editUser(@RequestBody UserDto userDto) {
        userService.editUser(userDto);
        return true;
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PostMapping("/createUser")
    public boolean createUser(@RequestBody UserDto userdto) {
        System.out.println(userdto.getName());
        userService.createUser(userdto);
        return true;
    }


    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @GetMapping("/getUsers")
    public List<UserDto> findUsers() {
        return UserConverter.entitiesToDtos(userRepository.findAll());
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @PostMapping("/deleteUser")
    public boolean deleteUser(@RequestBody long id) {
        userService.deleteUser(id);
        return true;
    }

}