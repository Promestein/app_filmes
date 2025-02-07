package com.example.filmes.repository;

import com.example.filmes.model.Filme;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface FilmeRepository extends JpaRepository<Filme, Long>{

    @Query(value = "SELECT * FROM lista_filmes", nativeQuery = true)
    List<Filme> obterNomesFilmes();

    @Query(value = "SELECT name FROM lista_filmes", nativeQuery = true)
    List<String> findAllNames();
}