import styled from 'styled-components';

const InputBase = styled.input.attrs(() => ({
  type: 'text',
  // size: props.small ? 5 : 2,
}))`
  border-radius: 3px;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  /* display: block; */
  margin: 1em 0em;
  padding: 0.25em 1em;
  font-size: 1em;
  background-color: ${({ theme }) => theme.colors.secondaryLight};

  ::placeholder {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const Input = ({ onChange, placeholder }) => (
  <>
    <InputBase onChange={onChange} placeholder={placeholder} />
  </>
);

export default Input;