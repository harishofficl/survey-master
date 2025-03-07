package com.trustrace.survey.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Document(collection = "surveys")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Survey {
    @Id
    private String id;
    private String userId;
    private String title;
    private String description;
    private int responseCount;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    private List<Question> questions;
    private boolean published;
}