package com.trustrace.survey.dao;

import com.trustrace.survey.model.Survey;
import com.trustrace.survey.view.SurveyView;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.core.Local;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;


import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Repository
public class SurveyDao {

    private static final Logger logger = LoggerFactory.getLogger(SurveyDao.class);

    @Autowired
    private MongoTemplate mongoTemplate;

    public List<Survey> getAllSurveys(int page, int size) {
        logger.info("Fetching surveys for page: {} with size: {}", page, size);
        Pageable pageable = PageRequest.of(page, size);
        Query query = new Query().with(pageable);
        return mongoTemplate.find(query, Survey.class);
    }

    public Optional<Survey> getSurveyById(String id) {
        logger.info("Fetching survey with id: {}", id);
        Survey survey = mongoTemplate.findById(id, Survey.class);
        return Optional.ofNullable(survey);
    }

    public List<SurveyView> getSurveysByUserId(String userId) {
        logger.info("Fetching surveys for user id: {}", userId);
        Query query = new Query(Criteria.where("userId").is(userId));
        List<Survey> surveys = mongoTemplate.find(query, Survey.class);
        return surveys.stream().map(SurveyView::new).collect(Collectors.toList());
    }

    public Survey createSurvey(Survey survey) {
        logger.info("Creating new survey with id: {}", survey.getId());
        survey.setCreatedAt(LocalDateTime.now());
        survey.setPublished(true);
        return mongoTemplate.save(survey);
    }

    public Survey updateSurvey(String id, Survey survey) {
        logger.info("Updating survey with id: {}", id);
        survey.setCreatedAt(getSurveyById(id).isPresent() ? getSurveyById(id).get().getCreatedAt() : LocalDateTime.now());
        survey.setId(id);
        survey.setUpdatedAt(LocalDateTime.now());
        return mongoTemplate.save(survey);
    }

    public void deleteSurvey(String id) {
        logger.info("Deleting survey with id: {}", id);
        Query query = new Query(Criteria.where("id").is(id));
        mongoTemplate.remove(query, Survey.class);
    }
}