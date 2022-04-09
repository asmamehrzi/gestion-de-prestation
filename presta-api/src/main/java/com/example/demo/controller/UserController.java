package com.example.demo.controller;

import com.example.demo.model.User;
import com.example.demo.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1")
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @GetMapping("/users")
    public List<User> getAllUser(){
        return this.userRepository.findAll();
    }
    @GetMapping("/users/{id}")
    public Optional<User> getEmployeeById(@PathVariable(value = "id") Long Id)
             {
                 return  userRepository.findById(Id);

    }
    @PostMapping("/users")
    public  User createUser(@RequestBody User user) {

        return userRepository.save(user);
    }
    @DeleteMapping("/users/{id}")
    public String deleteUser(@PathVariable(value = "id") Long Id) {
        User user = userRepository.findById(Id).get();

        userRepository.delete(user);
        return "Deleted Successfully";
    }

    @PutMapping("/users/{id}")
    public ResponseEntity<User> updateUser(@PathVariable(value = "id") Long Id,
                                           @RequestBody User userDetails)  {
        User user = userRepository.findById(Id).get();
        user.setName(userDetails.getName());
        user.setLname(userDetails.getLname());
        final User updatedUser = userRepository.save(user);
        return ResponseEntity.ok(updatedUser);
    }


}


