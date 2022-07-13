package com.example.demo.service;

import com.example.demo.model.Profil;
import com.example.demo.repository.ProfilRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
public class ProfilServiceImpl implements ProfilService{
    @Autowired
    private ProfilRepository profilRepository;
    @Override
    public Profil addProfil(Profil profil) {
        return profilRepository.save(profil);
    }

    @Override
    public List<Profil> listProfil() {
        return profilRepository.findAll();
    }

    @Override
    public ResponseEntity<Profil> getProfilById(Long id) {
        Profil profil = profilRepository.findById(id).get();
        return ResponseEntity.ok(profil);        }

    @Override
    public String deleteProfil(Long Id) {
        Profil profil = profilRepository.findById(Id).get();

        profilRepository.delete(profil);
        return "Deleted Successfully";       }

    @Override
    public ResponseEntity<Profil> updateProfil(long id, Profil profil) {
        Profil profil1 = profilRepository.findById(id).get();
        profil1.setName(profil.getName());
        profil1.setDescription(profil.getDescription());
        final Profil updatedProfil = profilRepository.save(profil1);
        return ResponseEntity.ok(updatedProfil);    }
}
