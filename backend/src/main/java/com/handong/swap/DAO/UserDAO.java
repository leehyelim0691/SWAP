package com.handong.swap.DAO;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.handong.swap.DTO.UserDTO;

@Repository
public interface UserDAO {
	List<UserDTO> read();
}
