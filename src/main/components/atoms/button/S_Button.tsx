import styled from 'styled-components';

interface propsButton {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  type?: 'primary' | 'secondary';
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

const defType = (type: string | undefined) => {
  switch (type) {
    case 'primary':
      return ['#fff', '#C63700', '#a73103'];
    case 'secondary':
      return ['#fff', '#762100', '#631e03'];
    default:
      console.log(type);
      return ['#fff', '#C63700', '#a73103'];
  }
};

const S_Button = styled.div<propsButton>`
  margin: 0px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: pointer;
  }

  &:active {
    background-color: #8b8b8b;
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

  ${(props) => {
    const type = defType(props.type);

    return `
      color: ${type[0]};
      background-color: ${type[1]};
      &:hover{
        background-color: ${type[2]};
      }`;
  }};
`;

export default S_Button;
