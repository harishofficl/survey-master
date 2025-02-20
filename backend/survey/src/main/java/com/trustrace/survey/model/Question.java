package com.trustrace.survey.model;

import lombok.*;
import org.springframework.data.annotation.Id;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Question {
    @Id private String id;
    private String question;
    private String type;
    private int minLength;
    private int maxLength;
    private int minValue;
    private int maxValue;
    private int maxFileSize;
    private boolean specifiedFileTypes;
    private List<String> options;
    private List<String> fileTypes;
    private boolean required;
}