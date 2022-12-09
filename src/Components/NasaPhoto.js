import React from 'react' ; 
import styled from 'styled-components'; 

const NasaPhotoWrapper = styled.div `
    background:#FA8072; 
    padding: 50px;
    margin: 90px;
    color: #B03A2E;
`;

const NasaPhotoh3 = styled.h3 `
    display: flex ; 
    justify-content: center ;
    align-content: center ; 
    margin-right: 30%;
    margin-left: 30%;
    font-size: 160% ;  
    font-style: italic ; 
    font-family: sans-serif ; 
    border-style: solid ;
    border-color: #CD5C5C;
    border-radius: 20px ; 
    width: 30rem;
    
`;

const NasaPhotodate = styled.p `
    font-family: sans-serif ;
    font-size: 100% ; 
    border-bottom: solid; 
    border-color: #CD5C5C;
    padding: 30px;
    margin-left: 10% ; 
    margin-right: 10% ; 
`;

const NasaPhotoimg = styled.img `
    width: 400px;
    height: 400px;
    position: relative;
    overflow: hidden;
    border-radius: 50%;
`;

const NasaExplanation = styled.p `
    text-align: justify;
    margin-left: 17%;
    margin-right: 17%;
    line-height: 40px;
    font-family: sans-serif;
    font-size: 20px;
    font-style: italic;
`;

function NasaPhoto (props)  {

    return (
        <NasaPhotoWrapper>
            <NasaPhotoh3>{props.photo.title}</NasaPhotoh3>
            <NasaPhotodate>{props.photo.date}</NasaPhotodate>
            <NasaPhotoimg src={props.photo.hdurl}></NasaPhotoimg>
            <NasaExplanation>{props.photo.explanation}</NasaExplanation>
        </NasaPhotoWrapper>
    );
}

export default NasaPhoto ; 