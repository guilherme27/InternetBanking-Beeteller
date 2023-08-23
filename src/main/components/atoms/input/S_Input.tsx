import styled from 'styled-components';

interface propsInput {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  type?: 'text' | 'password';
}

const defSize = (size: string | undefined) => {
  switch (size) {
    case 'sm':
      return ['small', 0.2, 3.5, 1.5];
    case 'md':
      return ['medium', 0.5, 4.375, 2];
    case 'lg':
      return ['large', 0.8, 5.25, 2.5];
    case 'xl':
      return ['larger', 1, 18.75, 3];
    default:
      return ['medium', 0.5, 4.375, 2];
  }
};

const S_Input = styled.div<propsInput>`
  border: 0px !important;
  color: #767676;
  font-size: 1rem;
  width: 18.5rem;
  height: 1.5rem;

  &:hover,
  &:target,
  &:focus-visible {
    outline: none;
    cursor: text;
  }

  ${(props) => {
    const size = defSize(props.size);
    return `
      font-size: ${size[0]};
      border-radius: ${size[1]}rem;
      width: ${size[2]}rem;
      height: ${size[3]}rem;
        `;
  }};
`;

export default { S_Input };

// .CInput {
//     margin: 0px;
//     padding: 0.3rem 1rem 0.5rem 1rem;
//     background: #fff;
//     border-radius: 1rem;

//     &.big{
//         width: 18.75rem;
//         height: 1.5rem;
//     }

//     &:hover{
//         cursor: text;
//     }

// }
