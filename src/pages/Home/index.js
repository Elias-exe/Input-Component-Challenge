import { Container, Header } from './styles';

import { InputGroup } from '../../components/InputGroup';

export default function Home() {
  return (
    <Container>
      <Header>
        <h2>Inputs</h2>
      </Header>

      <InputGroup title="<Input />" />

    </Container>
  );
}
