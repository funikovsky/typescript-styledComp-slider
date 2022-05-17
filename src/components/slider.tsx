import { FC } from "react"
import styled from "styled-components"
import { useAppSelector } from "./store/sliderSlice"



export const StyledSlider = styled.div<{ leftNumber: number }> `
   
    height: 100%;
    position: absolute ;
    display: flex;
    left: ${props => props.leftNumber}%;
    transition: 0.3s;

`
export const Slide1 = styled.div`
    height: 100%;
    width: 700px;
    background-color: blue;
    color: black;
    font-size: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

export const Slide2 = styled.div`
    height: 100%;
    width: 700px;
    background-color: rosybrown;
    color: black;
    font-size: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Slide3 = styled.div`
    height: 100%;
    width: 700px;
    background-color: yellow;
    color: black;
    font-size: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Slider: FC = () => {

    const leftNumber = useAppSelector(state => state.slider.left)

    return (

        <StyledSlider leftNumber={leftNumber}>
            <Slide1>
                1
            </Slide1>
            <Slide2>
                2
            </Slide2>
            <Slide3>
                3
            </Slide3>
        </StyledSlider>
    )
}