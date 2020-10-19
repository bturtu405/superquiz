import { Button } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import './answer.css';

interface AnswerProps {
    text: string;
    index: number;
    isDisabled: boolean;
    handleClick: () => void
    color:string
}

export const Answer = ({ text,index,isDisabled,handleClick,color}: AnswerProps) =>{
 const  style = 'slide-' + (index % 2 === 0 ? 'left' : 'right');
 const [isAnimationShown,setIsAnimationShown] = useState<boolean>(false);
    useEffect(()=>{
       setIsAnimationShown(true);
       setTimeout(()=>{
           setIsAnimationShown(false);
       },2000)
    },[text]);

    return <Button
        onClick={handleClick}
        disabled={isDisabled}
        className={isAnimationShown ? style : ''}
        style={
            {
                borderColor: 'black',
                marginBottom: '1vh',
                color: 'pink',
                backgroundColor:color,
                fontSize: '5vh',
                fontWeight: 'bold',
                width: '30vw'
            }}>{text}</Button> 
        }