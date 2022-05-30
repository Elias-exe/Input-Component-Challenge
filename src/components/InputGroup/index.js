import PropTypes from 'prop-types';

import { Container, StyledInput } from './styles';
import Input from '../Input';

export function InputGroup({ title, error }) {
  return (
    <Container>
      <p>{title}</p>

      <StyledInput error={error}>
        <Input placeholder="Placeholder" />
        <label>Label</label>
      </StyledInput>

    </Container>
  );
}

InputGroup.propTypes = {
  title: PropTypes.string,
  error: PropTypes.bool,
};

InputGroup.defaultProps = {
  title: '',
  error: false,
};
