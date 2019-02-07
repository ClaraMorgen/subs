import styled from 'styled-components';

const Button = styled.button`
  margin-left: 1.5rem;
  align-text: center;
  width: 180px;
  transition: all 0.15s ease;
    background-color: #77BFFC;
    color: ${props => props.theme.offWhite};
    font-weight: bold;
    padding: 5px;
    border-radius: 30px;
    &:hover {
      cursor: pointer;
      text-decoration: none;
      background-color: ${props => props.theme.winterWizard};
    }
`;

export default Button;
