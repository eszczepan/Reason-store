import styled from 'styled-components';

const PriceTag = styled.span`
  position: absolute;
  top: -3px;
  right: -3px;
  font-size: ${({ theme }) => theme.fontSize.xs};
  font-weight: ${({ theme }) => theme.bold};
  background-color: ${({ theme }) => theme.secondary};
  color: white;
  padding: 0.5rem;
  transform: rotate(4deg);
  line-height: 1;
`;

export default PriceTag;
