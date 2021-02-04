import styled from 'styled-components';

const ItemWrapper = styled.div`
  position: relative;
  margin: auto;
  width: 217px;
  height: 269px;

  @media only screen and (min-width: 1104px) {
    margin: 10px 0;
  }

  @media only screen and (min-width: 1304px) {
    width: 293px;
    height: 313px;
  }
`

const Item = styled.a`
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 36px 0;
  width: 98%;
  height: 98%;
  border-radius: 8px;
  transform: translate(-50%, -50%);
  box-shadow: inset 0px 4px 20px 2px #00000059;

  @media only screen and (min-width: 1104px) {
    width: 100%;
    height: 100%;
  }

  &:hover {
    width: 100%;
    height: 100%;
    box-shadow: inset 0px 4px 20px 2px #9ea0c5de;

    @media only screen and (min-width: 1104px) {
      width: 102%;
      height: 102%;
    }

    & > div {
      box-shadow: 0px 0px 8px 3px #9ea0c5de;
      filter: brightness(1);
    }
    & > p {
      color: ${({theme}) => theme.colors.color_blue};
    }
  }
`

const ItemImage = styled.div`
  width: 173px;
  height: 138px;
  margin: 0 auto;
  margin-bottom: 15px;
  border-radius: 8px;
  box-shadow: 0px 0px 20px 2px #00000059;
  background-image: url(${props => props.bgImage});
  background-position: center;
  background-size: cover;
  filter: brightness(0.9);
  transition: all 0.3s ease-in-out;

  @media only screen and (min-width: 991px) {
    filter: brightness(0.6);
  }

  @media only screen and (min-width: 1304px) {
    width: 225px;
    height: 177px;
  }
`
const ItemContent = styled.p`
  font-size: 14px;
  max-width: 200px;
  font-weight: ${({theme}) => theme.fontWeight.font_weightSemiBold};
  color: ${({theme}) => theme.colors.color_black};
  transition: all 0.3s ease-in-out;
`

const PortfolioItem = ({ ...props }) => {
  return(
    <ItemWrapper>
      <Item href={ props.link }>
        <ItemImage bgImage={ props.bgImage } ></ItemImage>
        <ItemContent>
          { props.content }
        </ItemContent>
      </Item>
    </ItemWrapper>
  )
}

export default PortfolioItem;