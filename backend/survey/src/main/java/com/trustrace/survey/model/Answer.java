package com.trustrace.survey.model;

import lombok.*;

import java.util.Date;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Answer {
    private String questionId;
    private String question;
    private String type;
    private String answer;
    private List<String> options;
    private Date createdAt;
}