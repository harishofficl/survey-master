package com.trustrace.survey.service;

import com.trustrace.survey.dao.SurveyDao;
import com.trustrace.survey.model.Survey;
import com.trustrace.survey.view.SurveyView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SurveyService {

    @Autowired
    private SurveyDao surveyDao;

    public List<Survey> getAllSurveys(int page, int size) {
        return surveyDao.getAllSurveys(page, size);
    }

    public Optional<Survey> getSurveyById(String id) {
        return surveyDao.getSurveyById(id);
    }

    public List<SurveyView> getSurveysByUserId(String userId) {
        return surveyDao.getSurveysByUserId(userId);
    }

    public Survey createSurvey(Survey survey) {
        return surveyDao.createSurvey(survey);
    }

    public Survey updateSurvey(String id, Survey survey) {
        return surveyDao.updateSurvey(id, survey);
    }

    public void deleteSurvey(String id) {
        surveyDao.deleteSurvey(id);
    }
}