package com.trustrace.survey.controller;

import com.trustrace.survey.model.Response;
import com.trustrace.survey.service.ResponseService;
import com.trustrace.survey.view.ResponseView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/responses")
public class ResponseController {

    @Autowired
    private ResponseService responseService;

    @GetMapping
    public List<Response> getAllResponses(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size) {
        return responseService.getAllResponses(page, size);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Response> getResponseById(@PathVariable String id) {
        Optional<Response> response = responseService.getResponseById(id);
        return ResponseEntity.of(response);
    }

    @GetMapping("/survey")
    public List<ResponseView> getResponsesBySurveyId(@RequestParam String surveyId) {
        return responseService.getResponsesBySurveyId(surveyId);
    }

    @PostMapping
    public Response createResponse(@RequestBody Response response) {
        return responseService.createResponse(response);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Response> updateResponse(@PathVariable String id, @RequestBody Response response) {
        return ResponseEntity.ok(responseService.updateResponse(id, response));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteResponse(@PathVariable String id) {
        responseService.deleteResponse(id);
        return ResponseEntity.noContent().build();
    }
}