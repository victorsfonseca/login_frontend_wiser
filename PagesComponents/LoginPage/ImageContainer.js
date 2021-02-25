import styled from 'styled-components'
import image from '../../public/Assets/images/shutterstock_1220809918_1.png'

function ImageContainer(props){
    return(
        <div className={props.className}></div>
    );
}

const ImageContainerStyled = styled(ImageContainer)`
    background-image: linear-gradient(0deg, #130525 0%, rgba(105, 57, 153, 0) 100%), url(${image});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 56%;
    z-index: -1;

    @media(max-width: 768px){
        width: 40%;
    }
    
    @media(max-width: 415px){
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        background-color: #130525;
        background-image: linear-gradient(0deg, #130525 50%, rgba(105, 57, 153, 0) 100%), url(${image});
        background-size: contain;
        background-position: left top;
    }
`

export default ImageContainerStyled