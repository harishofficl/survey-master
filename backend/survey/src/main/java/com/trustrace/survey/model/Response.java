package com.trustrace.survey.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Document(collection = "responses")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Response {
    @Id
    private String id;
    private String surveyId;
    private String responderName;
    private Date createdAt;
    private List<Answer> responses;
}
