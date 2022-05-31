import PropTypes from 'prop-types';

import { Container, InputContainer } from './styles';

export function InputGroup({
  title, children,
}) {
  return (
    <Container>
      <p>{title}</p>

      <InputContainer>
        {children}
      </InputContainer>
    </Container>
  );
}

InputGroup.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

InputGroup.defaultProps = {
  title: null,
};
