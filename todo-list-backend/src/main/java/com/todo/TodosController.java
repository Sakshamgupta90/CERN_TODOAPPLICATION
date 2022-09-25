package com.todo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
//import org.springframework.web.server.ResponseStatusException;

@Controller
public class TodosController {

    @Autowired
    private TodosService todosService;

    @GetMapping("/todos")
    public  ResponseEntity findAll() {
         Iterable<Todo> todos = todosService.getAllTodos();
        return ResponseEntity.ok(todos);

    }

    @DeleteMapping("/todos/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public ResponseEntity delete(@PathVariable Long id) throws Exception {


       todosService.deleteTodos(id);
        return ResponseEntity.ok().build();
    }
}