package com.trustrace.survey.controller;

import com.trustrace.survey.model.Survey;
import com.trustrace.survey.service.SurveyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/surveys")
public class SurveyController {

    @Autowired
    private SurveyService surveyService;

    @GetMapping
    public List<Survey> getAllSurveys(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "6") int size) {
        return surveyService.getAllSurveys(page, size);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Survey> getSurveyById(@PathVariable String id) {
        Optional<Survey> survey = surveyService.getSurveyById(id);
        return ResponseEntity.of(survey);
    }

    @GetMapping("/user")
    public List<Survey> getSurveysByUserId(@RequestParam String userId) {
        return surveyService.getSurveysByUserId(userId);
    }

    @PostMapping
    public Survey createSurvey(@RequestBody Survey survey) {
        return surveyService.createSurvey(survey);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Survey> updateSurvey(@PathVariable String id, @RequestBody Survey survey) {
        return ResponseEntity.ok(surveyService.updateSurvey(id, survey));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSurvey(@PathVariable String id) {
        surveyService.deleteSurvey(id);
        return ResponseEntity.noContent().build();
    }
}