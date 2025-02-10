package com.example.filmes.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "sua_lista") // Nome da tabela no SQLite
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class FilmeLista {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "rating")
    private double rating;

}