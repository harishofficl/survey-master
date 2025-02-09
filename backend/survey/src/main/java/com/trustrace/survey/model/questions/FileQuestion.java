package com.trustrace.survey.model.questions;

import com.trustrace.survey.model.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class FileQuestion extends Question {
    private Integer maxFileSize;
    private List<String> fileTypes;

    public FileQuestion(String question, boolean required, Integer maxFileSize, List<String> fileTypes) {
        super(question, "file", required);
        this.maxFileSize = maxFileSize;
        this.fileTypes = fileTypes;
    }
}