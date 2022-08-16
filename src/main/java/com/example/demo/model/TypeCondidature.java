package com.example.demo.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;

@Entity
@Table(name = "TypeCondidature")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class TypeCondidature {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String typeCondidature;
    @OneToMany(mappedBy = "typeCondidature")
    private Collection<Condidature> condidatures =new ArrayList<>();
}
