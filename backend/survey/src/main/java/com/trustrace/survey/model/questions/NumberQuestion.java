package com.trustrace.survey.model.questions;

import com.trustrace.survey.model.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class NumberQuestion extends Question {
    private Integer minRange;
    private Integer maxRange;

    public NumberQuestion(String question, boolean required, Integer minRange, Integer maxRange) {
        super(question, "number", required);
        this.minRange = minRange;
        this.maxRange = maxRange;
    }
}