import styled from 'styled-components';

const SocialsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 170px;

  @media only screen and (min-width: 576px) {
    width: 200px;
  }
`

const SocialLink = styled.a`
  position: relative;
  display: block;
  width: 25px;
  height: 25px;
  color: ${({theme}) => theme.colors.color_grayDark};
  transition: all 0.3s ease-in-out;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 30px;
    height: 30px;
    color: ${({theme}) => theme.colors.color_grayDark};
    background-image: url(${props => props.icon_before});
    z-index: 4;
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }

  &:hover {
    color: ${({theme}) => theme.colors.color_blue};

    @media only screen and (min-width: 768px) {
      &::before {
        top: -27px;
        left: 50%;
        width: 22px;
        height: 22px;
        opacity: .3;
        transform: translateX(-50%);
      }
    }
  }

  @media only screen and (min-width: 576px) {
    width: 30px;
    height: 30px;
  }
`

export { SocialsWrapper, SocialLink }