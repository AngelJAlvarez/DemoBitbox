package com.example.demo.repository;

import com.example.demo.models.DeactivatedItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DeactivatedItemRepository extends JpaRepository<DeactivatedItem, Long> {

}
