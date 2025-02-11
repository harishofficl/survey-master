package com.trustrace.survey.model;

import lombok.*;
import org.springframework.data.annotation.Id;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Answer {
    @Id private String id;
    private String question;
    private String type;
    private String answer;
    private List<String> options;
}