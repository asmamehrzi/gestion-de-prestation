package com.example.demo.sec.repository;

import com.example.demo.sec.model.AppUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppUserReository extends JpaRepository<AppUser,Long> {
    public AppUser findByUsername(String username);

}
