package com.todo;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodosRepository extends CrudRepository<Todo, Long> {
}