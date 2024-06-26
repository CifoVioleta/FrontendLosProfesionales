import api from "../config/axiosConfig";

export const fetchCompetences = () => {
  return api.get("/competences");
};

export const fetchCompetenceById = (id) => {
  return api.get(`/competences/${id}`);
};

export const createCompetence = (competenceData) => {
  return api.post("/competences", competenceData);
};

export const updateCompetence = (id, competenceData) => {
  return api.put(`/competences/${id}`, competenceData);
};

export const deleteCompetence = (id) => {
  return api.delete(`/competences/${id}`);
};