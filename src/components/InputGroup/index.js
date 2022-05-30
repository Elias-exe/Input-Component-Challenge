import PropTypes from 'prop-types';

import { Container } from './styles';
import Input from '../Input';

export function InputGroup({ title }) {
  return (
    <Container>
      <p>{title}</p>

      <div className="input-infos">
        <Input placeholder="Placeholder" />
        <label>Label</label>
      </div>

    </Container>
  );
}

InputGroup.propTypes = {
  title: PropTypes.string,
};

InputGroup.defaultProps = {
  title: '',
};
