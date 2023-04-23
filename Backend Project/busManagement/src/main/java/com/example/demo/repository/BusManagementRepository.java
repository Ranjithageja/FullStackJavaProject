package com.example.demo.repository;



import java.util.List;

import com.example.demo.model.BusManagement;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.BusManagement;
/*@Repository-->used to indicate that the class provides the mechanism for storage, retrieval, search, 
 *update and delete operation on objects
 *JpaRepository is particularly a JPA specific extension for Repository
 *Jpa Repository contains the APIs for basic CRUD operations*/


@Repository
public interface BusManagementRepository extends JpaRepository<BusManagement, Integer>{
             List<BusManagement> findBystartingPoint(String startingPoint);
             List<BusManagement> findBybusType(String busType);



 
}

