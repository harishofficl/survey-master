package com.trustrace.survey.view;

import com.trustrace.survey.model.Question;
import com.trustrace.survey.model.Survey;
import lombok.*;
import org.springframework.data.annotation.Id;


import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class SurveyView {
    @Id
    private String id;
    private String userId;
    private String title;
    private String description;
    private int responseCount;

    public SurveyView(Survey survey) {
        this.id = survey.getId();
        this.userId = survey.getUserId();
        this.title = survey.getTitle();
        this.description = survey.getDescription();
        this.responseCount = survey.getResponseCount();
    }
}