package com.example.filmes.repository;

import com.example.filmes.model.FilmeLista;

import jakarta.transaction.Transactional;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface FilmeListaRepository extends JpaRepository<FilmeLista, Long>{

    @Query(value = "SELECT * FROM sua_lista", nativeQuery = true)
    List<FilmeLista> obterNomesFilmes();

    @Query(value = "SELECT name FROM sua_lista", nativeQuery = true)
    List<String> findAllNames();
}