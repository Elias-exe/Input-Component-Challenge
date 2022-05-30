import { Container, Header } from './styles';

import { InputGroup } from '../../components/InputGroup';

export default function Home() {
  return (
    <Container>
      <Header>
        <h2>Inputs</h2>
      </Header>

      <InputGroup title="<Input />" />

      <InputGroup
        title="<Input error />"
        error
      />

      <InputGroup
        title="<Input disabled />"
        disabled
      />

    </Container>
  );
}
