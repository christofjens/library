import styled from 'styled-components/macro'

export default function Button(props) {
  return <ButtonStyled {...props} />
}

const ButtonStyled = styled.button`
  transition: 0.2s ease-in-out;
  color: ${props => (props.primaryGreen ? 'white' : props.secondaryGreen ? 'green' : props.primaryGrey ? 'white' : props.secondaryGrey ? 'lightgrey' : 'grey')};
  margin: 20px 10px;
  padding: ${props => (props.large ? '20px 32px' : props.medium ? '16px 24px' : '12px 16px')};
  border-radius: ${props => (props.large ? '16px' : props.medium ? '12px' : props.small ? '8px' : '0')};
  border: ${props => (props.primaryGreen ? '2px solid green' : props.secondaryGreen ? '2px solid green' : props.primaryGrey ? '2px solid lightgrey' : props.secondaryGrey ? '2px solid lightgrey' : 'grey')};
  background-color: ${props => (props.primaryGreen ? 'green' : props.secondaryGreen ? 'white' : props.primaryGrey ? 'lightgrey' : props.secondaryGrey ? 'white' : 'grey')};
  font-weight: 900;
  font-size: ${props => (props.large ? '1.4rem' : props.medium ? '1.2rem' : '1rem')};

  &:hover {
    transition: 0.2s ease-in-out;
    box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.25);
    background-color: ${props => (props.primaryGreen ? 'darkgreen' : props.secondaryGreen ? 'white' : props.primaryGrey ? 'dimgrey' : props.secondaryGrey ? 'white' : 'grey')};
    border: ${props => (props.primaryGreen ? '2px solid darkgreen' : props.secondaryGreen ? '2px solid darkgreen' : props.primaryGrey ? '2px solid dimgrey' : props.secondaryGrey ? '2px solid dimgrey' : 'grey')};
    color: ${props => (props.primaryGreen ? 'white' : props.secondaryGreen ? 'darkgreen' : props.primaryGrey ? 'white' : props.secondaryGrey ? 'dimgrey' : 'grey')};
  }
`
