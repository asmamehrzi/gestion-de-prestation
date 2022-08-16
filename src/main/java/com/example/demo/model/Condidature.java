package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

@Entity
@Table(name = "condidature")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Condidature {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String nom;
    private String prenom;
    private String email;
    private String pays;
    private String tel;
    private String cv;
    @ManyToOne
    private Consultant consultant;
    @ManyToMany(mappedBy ="condidatures" ,fetch = FetchType.EAGER)
    private Collection<Competance> competances =new ArrayList<>();

    @ManyToOne
    private Client client;
    @ManyToOne
    private TypeCondidature typeCondidature;
}
