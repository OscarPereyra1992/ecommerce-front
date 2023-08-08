import { useState } from "react";
import { styled } from "styled-components";


const Image = styled.img`
        max-width: 100%;
        max-height: 100%;
    `;

    const BigImage = styled.img`
        max-width: 100%;
        max-height: 200px;
    `;

    const ImageButtons = styled.div`
        display: flex;
        gap: 10px;
        flex-grow: 0;
        margin-top: 15px;
        
    `;

    const ImageButton = styled.div`
        border:2px solid #ccc;
        ${props => props.active 
        ? `border-color: #FFBDF7; ` 
        : `border-color: transparent;
        opacity: 0.7;`}
        height: 60px;
        padding:5px;
        border-radius: 5px;
        cursor: pointer;
    `;

    const BigImageWrapper = styled.div`
        text-align: center;
    `;    

export default function ProductImages({images}) {
    const [activeImage,setActiveImage] = useState(images?.[0]);
    
    return(
    <>
        <BigImageWrapper>
        <BigImage src={activeImage}/>
        </BigImageWrapper>
        
        <ImageButtons>
            {images.map(image =>(
                <ImageButton 
                key= {image}
                active={image === activeImage}
                onClick={() => setActiveImage(image)}>
                    <Image src={image}/>
                </ImageButton>
            ))}
        </ImageButtons>
    </>
    );
}
