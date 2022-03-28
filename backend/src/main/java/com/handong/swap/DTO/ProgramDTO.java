package com.handong.swap.DTO;

import java.util.Date;

public class ProgramDTO {
	int id;
	int admin_id;
	int category_id;
	String program_name;
	int recruitment_type;
	int quota;
	int applicants_num;
	String information;
	int status;
	Date start_date;
	Date edit_date;
	Date end_date;
	Date regdate;
	int application_form;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getAdmin_id() {
		return admin_id;
	}
	public void setAdmin_id(int admin_id) {
		this.admin_id = admin_id;
	}
	public int getCategory_id() {
		return category_id;
	}
	public void setCategory_id(int category_id) {
		this.category_id = category_id;
	}
	public String getProgram_name() {
		return program_name;
	}
	public void setProgram_name(String program_name) {
		this.program_name = program_name;
	}
	public int getRecruitment_type() {
		return recruitment_type;
	}
	public void setRecruitment_type(int recruitment_type) {
		this.recruitment_type = recruitment_type;
	}
	public int getQuota() {
		return quota;
	}
	public void setQuota(int quota) {
		this.quota = quota;
	}
	public int getApplicants_num() {
		return applicants_num;
	}
	public void setApplicants_num(int applicants_num) {
		this.applicants_num = applicants_num;
	}
	public String getInformation() {
		return information;
	}
	public void setInformation(String information) {
		this.information = information;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public Date getStart_date() {
		return start_date;
	}
	public void setStart_date(Date start_date) {
		this.start_date = start_date;
	}
	public Date getEdit_date() {
		return edit_date;
	}
	public void setEdit_date(Date edit_date) {
		this.edit_date = edit_date;
	}
	public Date getEnd_date() {
		return end_date;
	}
	public void setEnd_date(Date end_date) {
		this.end_date = end_date;
	}
	public Date getRegdate() {
		return regdate;
	}
	public void setRegdate(Date regdate) {
		this.regdate = regdate;
	}
	public int getApplication_form() {
		return application_form;
	}
	public void setApplication_form(int application_form) {
		this.application_form = application_form;
	}

	
	
}