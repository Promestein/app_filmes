package com.example.filmes.controller;

import com.example.filmes.model.Filme;
import com.example.filmes.repository.FilmeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

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
        return filmeRepository.findAll();
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

    // Adicionar nova Filme
    @PostMapping
    public Filme adicionar(@RequestBody Filme filme) {
        return filmeRepository.save(filme);
    }

    // Deletar pessoa por ID
    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        filmeRepository.deleteById(id);
    }
}