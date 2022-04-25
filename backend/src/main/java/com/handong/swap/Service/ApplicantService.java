package com.handong.swap.Service;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.handong.swap.DTO.ApplicantDTO;
import com.handong.swap.DTO.ApplicationDTO;
import com.handong.swap.DTO.ProgramDTO;

public interface ApplicantService {
	
	public String readApplicantInformationByProgramId(int id) throws JsonProcessingException;
	public String updateApplicantStatus(int id,int status);
	public int applyApplication(ApplicantDTO applicant);



}