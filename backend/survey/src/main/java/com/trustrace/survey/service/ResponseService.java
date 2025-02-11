package com.trustrace.survey.service;

import com.trustrace.survey.dao.ResponseDao;
import com.trustrace.survey.model.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ResponseService {

    @Autowired
    private ResponseDao responseDao;

    public List<Response> getAllResponses(int page, int size) {
        return responseDao.getAllResponses(page, size);
    }

    public Optional<Response> getResponseById(String id) {
        return responseDao.getResponseById(id);
    }

    public List<Response> getResponsesBySurveyId(String surveyId) {
        return responseDao.getResponsesBySurveyId(surveyId);
    }

    public Response createResponse(Response response) {
        return responseDao.createResponse(response);
    }

    public Response updateResponse(String id, Response response) {
        return responseDao.updateResponse(id, response);
    }

    public void deleteResponse(String id) {
        responseDao.deleteResponse(id);
    }
}