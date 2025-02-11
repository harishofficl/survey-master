package com.trustrace.survey.dao;

import com.trustrace.survey.model.Survey;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class SurveyDao {

    @Autowired
    private MongoTemplate mongoTemplate;

    public List<Survey> getAllSurveys() {
        return mongoTemplate.findAll(Survey.class);
    }

    public Optional<Survey> getSurveyById(String id) {
        Survey survey = mongoTemplate.findById(id, Survey.class);
        return Optional.ofNullable(survey);
    }

    public Survey createSurvey(Survey survey) {
        return mongoTemplate.save(survey);
    }

    public Survey updateSurvey(String id, Survey survey) {
        survey.setId(id);
        return mongoTemplate.save(survey);
    }

    public void deleteSurvey(String id) {
        Query query = new Query(Criteria.where("id").is(id));
        mongoTemplate.remove(query, Survey.class);
    }
}