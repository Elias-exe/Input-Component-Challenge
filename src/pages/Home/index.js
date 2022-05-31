/* eslint-disable react/jsx-one-expression-per-line */
import { Container, Header } from './styles';

import Input from '../../components/Input';
import { InputGroup } from '../../components/InputGroup';

export default function Home() {
  return (
    <Container>
      <Header>
        <h2>Inputs</h2>
      </Header>

      <InputGroup title="<Input />">
        <Input />
      </InputGroup>

      <InputGroup title="<Input error />">
        <Input error />
      </InputGroup>

      <InputGroup title="<Input disabled />">
        <Input disabled />
      </InputGroup>

      <InputGroup>

        <InputGroup title="<Input helperText=”Some interesting text” />">
          <Input helperText="Some interesting text" />
        </InputGroup>

        <InputGroup title="<Input helperText=”Some interesting text” error />">
          <Input helperText="Some interesting text" error />
        </InputGroup>
      </InputGroup>

      <InputGroup>
        <InputGroup title="<Input startIcon />">
          <Input startIcon icon="call" />
        </InputGroup>

        <InputGroup title="<Input endIcon />">
          <Input endIcon icon="lock" />
        </InputGroup>
      </InputGroup>

      <InputGroup title="<Input value=”text” />">
        <Input value="Text" />
      </InputGroup>

      <InputGroup>

        <InputGroup title="<Input size=”sm” />">
          <Input size="sm" />
        </InputGroup>

        <InputGroup title="<Input size=”md” />">
          <Input size="md" />
        </InputGroup>
      </InputGroup>

      <InputGroup title="<Input fullWidth/>">
        <Input fullWidth />
      </InputGroup>

      <InputGroup title="<Input multiline row=”4” />">
        <Input multiline row="4" />
      </InputGroup>

      <footer>
        <p>created by <strong>Elias-Exe</strong> - devChallenges.io</p>
      </footer>

    </Container>
  );
}
