package com.trustrace.survey.view;

import com.trustrace.survey.model.Answer;
import com.trustrace.survey.model.Response;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResponseView {
    @Id
    private String id;
    private String surveyId;
    private String responderName;
    private Date createdAt;

    public ResponseView(Response response) {
        this.id = response.getId();
        this.surveyId = response.getSurveyId();
        this.responderName = response.getResponderName();
        this.createdAt = response.getCreatedAt();
    }
}
