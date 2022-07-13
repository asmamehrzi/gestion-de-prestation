package com.example.demo.controller;

import com.example.demo.model.Profil;
import com.example.demo.service.ProfilService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1")
public class ProfilController {
    @Autowired
    private ProfilService profilService;

    @GetMapping("/profils")
    public List<Profil> getAllProfils() {

        return this.profilService.listProfil();
    }

    @GetMapping("/profils/{id}")
    public ResponseEntity<Profil> getProfilById(@PathVariable(value = "id") Long Id) {
        return profilService.getProfilById(Id);
    }
    @PostMapping("/profils")
    public Profil createProfil(@RequestBody Profil profil) {

        return profilService.addProfil(profil);
    }
    @DeleteMapping("/profils/{id}")
    public String deleteprofil(@PathVariable(value = "id") Long Id) {

        profilService.deleteProfil(Id);
        return "Deleted Successfully";
    }
    @PutMapping("/profils/{id}")
    public ResponseEntity<Profil> updateProfil(@PathVariable(value = "id") Long Id,
                                               @RequestBody Profil profilDetails) {
        Profil profil = profilService.getProfilById(Id).getBody();
        profil.setName(profilDetails.getName());
        profil.setDescription(profilDetails.getDescription());

        final Profil updatedProfil = profilService.addProfil(profil);
        return ResponseEntity.ok(updatedProfil);
    }



}
