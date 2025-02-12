package com.example.filmes.controller;

import com.example.filmes.model.Filme;
import com.example.filmes.model.FilmeLista;
import com.example.filmes.repository.FilmeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequestMapping("/api/filmes")
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class FilmeController {

    @Autowired
    private FilmeRepository filmeRepository;

    // Listar todas as pessoas
    @GetMapping("/todos")
    public List<Filme> listarTodas() {
        // return filmeRepository.obterNomesFilmes();
        List<Filme> filmes = filmeRepository.obterNomesFilmes();
        return ResponseEntity.status(HttpStatus.OK).body(filmes).getBody();
    }

    @GetMapping("/todos_nomes")
    public List<String> listarTodosNomes() {
        return filmeRepository.findAllNames();
    }

    // Buscar pessoa por ID
    @GetMapping("/{id}")
    public Optional<Filme> buscarPorId(@PathVariable Long id) {
        return filmeRepository.findById(id);
    }

    @GetMapping("/autocomplete")
    public List<Filme> buscarFilmes(@RequestParam String query) {
        List<Filme> filmes = filmeRepository.findAll();
        return filmes.stream()
                .filter(f -> f.getName().toLowerCase().contains(query.toLowerCase()))
                .collect(Collectors.toList());
    }

}