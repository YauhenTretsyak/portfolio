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
  display: block;
  width: 25px;
  height: 25px;
  color: ${({theme}) => theme.colors.color_grayDark};
  transition: all 0.3s ease-in-out;

  &:hover {
    color: ${({theme}) => theme.colors.color_blue};
  }

  @media only screen and (min-width: 576px) {
    width: 30px;
    height: 30px;
  }
`

export { SocialsWrapper, SocialLink }