package com.eduardo.festa.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.eduardo.festa.Exception.ResourceNotFoundException;
import com.eduardo.festa.model.Convidado;
import com.eduardo.festa.repository.Convidados;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class ConvidadosController {
	
	@Autowired
	private Convidados convidados;
	
	// pega todos os convidados
		@GetMapping("/convidados")
		public List<Convidado> getAllConvidados(){
			return convidados.findAll();
		}		
		
		// cria convidado
		@PostMapping("/convidados")
		public Convidado createConvidado(@RequestBody Convidado convidado) {
			return convidados.save(convidado);
		}
		
		// busca o convidado pelo ID
		@GetMapping("/convidados/{id}")
		public ResponseEntity<Convidado> getConvidadoById(@PathVariable Long id) {
			Convidado convidado = convidados.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("O usuário com id=" + id + " não existe!"));
			return ResponseEntity.ok(convidado);
		}
		
		// atualizar convidado
		
		@PutMapping("/convidados/{id}")
		public ResponseEntity<Convidado> updateConvidado(@PathVariable Long id, @RequestBody Convidado convidadoDetails){
			Convidado convidado = convidados.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("O usuário com id=" + id + " não existe!"));
			
			convidado.setNome(convidadoDetails.getNome());
			convidado.setQuantidadeAcompanhantes(convidadoDetails.getQuantidadeAcompanhantes());
			
			Convidado atualizaConvidado = convidados.save(convidado);
			return ResponseEntity.ok(atualizaConvidado);
		}
		
		// apaga convidado
		@DeleteMapping("/convidados/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteConvidado(@PathVariable Long id){
			Convidado convidado = convidados.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("O usuário com id=" + id + " não existe!"));
			
			convidados.delete(convidado);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
}
