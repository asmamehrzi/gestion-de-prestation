package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

@Entity
@Table(name = "competance")
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Competance {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String titre;
    private String description;

    @ManyToMany(mappedBy ="competances" ,fetch = FetchType.EAGER)
    private Collection<Mission> missions =new ArrayList<>();

    @ManyToMany(fetch = FetchType.EAGER)
    private Collection<Condidature> condidatures =new ArrayList<>();
}
