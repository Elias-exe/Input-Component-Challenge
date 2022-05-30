import PropTypes from 'prop-types';

import { Container, StyledInput } from './styles';
import Input from '../Input';

export function InputGroup({ title, error, disabled }) {
  return (
    <Container>
      <p>{title}</p>

      <StyledInput error={error}>
        <Input disabled={disabled} placeholder="Placeholder" />
        <label>Label</label>
      </StyledInput>

    </Container>
  );
}

InputGroup.propTypes = {
  title: PropTypes.string,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
};

InputGroup.defaultProps = {
  title: '',
  error: false,
  disabled: false,
};
