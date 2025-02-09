package com.trustrace.survey.model.questions;

import com.trustrace.survey.model.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ParagraphQuestion extends Question {
    private Integer minLength;
    private Integer maxLength;

    public ParagraphQuestion(String question, boolean required, Integer minLength, Integer maxLength) {
        super(question, "paragraph", required);
        this.minLength = minLength;
        this.maxLength = maxLength;
    }
}