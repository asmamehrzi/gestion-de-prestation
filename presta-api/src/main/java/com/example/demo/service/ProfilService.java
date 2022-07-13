package com.example.demo.service;

import com.example.demo.model.Profil;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface ProfilService {
    Profil addProfil(Profil profil);
    List<Profil> listProfil();
    ResponseEntity<Profil> getProfilById(Long id) ;
    String deleteProfil(Long Id);
    ResponseEntity<Profil> updateProfil(long id,Profil profil);

}
