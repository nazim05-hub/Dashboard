import { AppShell, Title, Container } from '@mantine/core';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <AppShell
      header={{ height: 60 }}
      padding="md"
    >
      <AppShell.Header>
        <Container size="xl" style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
          <Title order={2}>Remnawave Monitor</Title>
        </Container>
      </AppShell.Header>

      <AppShell.Main>
        <Container size="xl">
          <Dashboard />
        </Container>
      </AppShell.Main>
    </AppShell>
  );
}

export default App;


