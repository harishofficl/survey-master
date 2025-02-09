package com.trustrace.survey.model.questions;

import com.trustrace.survey.model.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
public class OptionQuestion extends Question {
    private List<String> options;

    public OptionQuestion(String question, String type, boolean required, List<String> options) {
        super(question, type, required);
        this.options = options;
    }
}