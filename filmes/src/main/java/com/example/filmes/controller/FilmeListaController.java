package com.example.filmes.controller;

import com.example.filmes.model.FilmeLista;
import com.example.filmes.repository.FilmeListaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/sua_lista")
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class FilmeListaController {

    @Autowired
    private FilmeListaRepository filmeListaRepository;

    // Listar todas as pessoas
    @GetMapping("/todos")
    public List<FilmeLista> listarTodas() {
        List<FilmeLista> filmes = filmeListaRepository.obterNomesFilmes();
        return ResponseEntity.status(HttpStatus.OK).body(filmes).getBody();
    }

    @PostMapping("/adicionar")
    public FilmeLista adicionarFilme(@RequestBody FilmeLista filme) {
        return filmeListaRepository.save(filme);
    }

    @DeleteMapping("/deletar/{id}")
    public void deletarFilme(@PathVariable Long id) {
        filmeListaRepository.deleteById(id);
    }
}