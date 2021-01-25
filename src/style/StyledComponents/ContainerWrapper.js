import styled from 'styled-components';

const ContainerWrapper = styled.div`
  margin: auto 10px;
  margin-top: 30px;
  margin-bottom: 30px;
  position: relative;
  width: 100%;
  min-height: .1rem;
  box-sizing: border-box;
  padding: 20px 40px;
  // padding-right: 36px;
  // padding-left: 36px;
  background: linear-gradient(${({theme}) => theme.colors.color_white} 24%, #d1e8ea6b 100%);
  box-shadow: inset 0px 3px 10px 1px #00000059;

  @media only screen and (min-width: 768px){
    max-width: 768px;
  }

  @media only screen and (min-width: 1104px){
    max-width: 1104px;
  }

  @media only screen and (min-width: 1301px){
    max-width: 1280px;
  }
`
export { ContainerWrapper };