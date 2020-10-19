import React from "react";
import { Typography } from "@material-ui/core";


interface QuestionsProp {
    text: string;
}

export const Question = ({ text }: QuestionsProp) =>
    <Typography style={{ textAlign:'center', fontSize: '6vh', color: 'purple' }}>
        {text}
    </Typography>;