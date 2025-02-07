package com.example.filmes.model;

import jakarta.persistence.*;

@Entity
@Table(name = "lista_filmes") // Nome da tabela no SQLite
public class Filme {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    // criar atributos para name, date, tagline, minute, rating, description, genre
    // criar getters e setters para todos os atributos

    @Column(name = "name")
    private String name;

    @Column(name = "date")
    private double date;

    @Column(name = "tagline")
    private String tagline;
    
    // @Column(name = "minute")
    // private double minute;

    @Column(name = "rating")
    private double rating;

    @Column(name = "description")
    private String description;

    @Column(name = "genre")
    private String genre;

}