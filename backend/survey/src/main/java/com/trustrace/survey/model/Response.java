package com.trustrace.survey.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "responses")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Response extends BaseEntity{
    private String responderName;

}
