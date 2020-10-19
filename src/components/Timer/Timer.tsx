import React, { useEffect } from "react";
import { useState } from "react"
import { Typography } from "@material-ui/core";
import { TIME_TO_ANSWER_IN_SECONDS } from "../../consts/TimerConsts";

interface TimerProps {
    isActive: boolean;
    showAnswer: () => void;
}


export const Timer = ({ isActive, showAnswer }: TimerProps) => {
    const [time, setTime] = useState<number>(TIME_TO_ANSWER_IN_SECONDS);

    useEffect(() => {
        const timeLeft = time - 1;
        if (isActive) {
            if (timeLeft) {
                setTimeout(() => {
                    setTime(timeLeft);
                }, 1000);
            } else {
                setTime(TIME_TO_ANSWER_IN_SECONDS);
                showAnswer();
            }
        } else {
            setTime(TIME_TO_ANSWER_IN_SECONDS);
        }
    });


    return isActive ? <Typography
        style={{
            textAlign: 'center',
            fontSize: '6vh',
            color: 'purple'
        }} >
        {time}
    </Typography> : null;
}