


import styled from 'styled-components';
import { ArrowLeft } from './components/arrowLeft';
import { ArrowRight } from './components/arrowRight';
import { Slider } from './components/slider';

import { StyledSliderContainer } from './components/sliderContainer';
import { setLeft, useAppDispatch } from './components/store/sliderSlice';

const AppWrapper = styled.div`

  position: relative;
  width: 100%;
  min-height: 100vh;
  
`

function App () {

  const dispatch = useAppDispatch()
  return (
    
    <AppWrapper>
      <StyledSliderContainer>
        <ArrowRight onClick={() => dispatch(setLeft('right'))}/>
        <ArrowLeft onClick={() => dispatch(setLeft('left'))}/>
        <Slider/>
      </StyledSliderContainer>
    </AppWrapper>

  );
}

export default App;
