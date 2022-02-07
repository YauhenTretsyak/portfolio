import styled from 'styled-components';
import { FlexWrapper } from '../../../style/StyledComponents/'

const ContactWrapper = styled(FlexWrapper)`
  position: absolute;
  top: 0;
  right: 0;
  padding: 0;
  ${props => props.IsDisplay ?
    `width: 300px;
     height: 200px;
     padding: 20px; 
     top: 121px;
     ` :
     `width: 0;
      height: 0;`
  }
  border-radius: 8px;
  background: linear-gradient(${({theme}) => theme.colors.color_white} 24%, #d1e8eaf0 100%);
  box-shadow: inset 0px 3px 10px 1px #00000059;
  z-index: 20;
  transition: all .3s ease-in-out;
`

const ContactInfo = styled.p`
  ${props => props.IsDisplay ?
    `font-size: 16px;
     line-height: 26px;
     font-weight: 700;
    ` :
     `font-size: 0px;`
  }
  text-align: center;
  transition: all .3s ease-in-out;
`

const Close = styled.p`
  position: absolute;
  top: 10px;
  right:10px;
  ${props => props.IsDisplay ?
    `font-size: 18px;
     font-weight: 700;
    ` :
     `font-size: 0px;`
  }
  color: ${({theme}) => theme.colors.color_gray};
  transition: all .2s ease-in-out;

  &:hover {
    cursor: pointer;
    font-size: 20px;
    color: ${({theme}) => theme.colors.color_blue};
  }
`

const Contact = (props) => {
  const { info, IsDisplay, DisplayContactInfo } = props

  return(
    <ContactWrapper 
      as='aside'
      IsDisplay={ IsDisplay }
    >
      <ContactInfo IsDisplay={ IsDisplay }>
        { info }
      </ContactInfo>
      <Close 
        onClick={ DisplayContactInfo }
        IsDisplay={ IsDisplay }
      >
        X
      </Close>
    </ContactWrapper>
  )
}

export default Contact;