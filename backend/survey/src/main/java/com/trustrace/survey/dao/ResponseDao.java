package com.trustrace.survey.dao;

import com.trustrace.survey.model.Response;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Repository
public class ResponseDao {

    private static final Logger logger = LoggerFactory.getLogger(ResponseDao.class);

    @Autowired
    private MongoTemplate mongoTemplate;

    public List<Response> getAllResponses(int page, int size) {
        logger.info("Fetching responses for page: {} with size: {}", page, size);
        Pageable pageable = PageRequest.of(page, size);
        Query query = new Query().with(pageable);
        return mongoTemplate.find(query, Response.class);
    }

    public Optional<Response> getResponseById(String id) {
        logger.info("Fetching response with id: {}", id);
        Response response = mongoTemplate.findById(id, Response.class);
        return Optional.ofNullable(response);
    }

    public List<Response> getResponsesBySurveyId(String surveyId) {
        logger.info("Fetching responses for survey id: {}", surveyId);
        Query query = new Query(Criteria.where("surveyId").is(surveyId));
        return mongoTemplate.find(query, Response.class);
    }

    public Response createResponse(Response response) {
        logger.info("Creating new response with id: {}", response.getId());
        response.setCreatedAt(new Date());
        return mongoTemplate.save(response);
    }

    public Response updateResponse(String id, Response response) {
        logger.info("Updating response with id: {}", id);
        response.setId(id);
        return mongoTemplate.save(response);
    }

    public void deleteResponse(String id) {
        logger.info("Deleting response with id: {}", id);
        Query query = new Query(Criteria.where("id").is(id));
        mongoTemplate.remove(query, Response.class);
    }
}