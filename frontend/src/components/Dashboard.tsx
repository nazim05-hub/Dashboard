import { useState, useEffect } from 'react';
import {
  Grid,
  Card,
  Text,
  Badge,
  Group,
  Stack,
  Loader,
  Alert,
  Title,
  Paper,
  Table,
} from '@mantine/core';
import { IconAlertCircle, IconCheck, IconX } from '@tabler/icons-react';
import { systemApi, Stats, BandwidthStats, NodesStatistics, Health, NodesMetrics } from '../services/api';

function Dashboard() {
  const [stats, setStats] = useState<Stats | null>(null);
  const [bandwidthStats, setBandwidthStats] = useState<BandwidthStats | null>(null);
  const [nodesStats, setNodesStats] = useState<NodesStatistics | null>(null);
  const [health, setHealth] = useState<Health | null>(null);
  const [nodesMetrics, setNodesMetrics] = useState<NodesMetrics | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(null);

      const [statsData, bandwidthData, nodesData, healthData, metricsData] = await Promise.all([
        systemApi.getStats(),
        systemApi.getBandwidthStats(),
        systemApi.getNodesStatistics(),
        systemApi.getHealth(),
        systemApi.getNodesMetrics(),
      ]);

      setStats(statsData);
      setBandwidthStats(bandwidthData);
      setNodesStats(nodesData);
      setHealth(healthData);
      setNodesMetrics(metricsData);
    } catch (err: any) {
      setError(err.response?.data?.message || err.message || 'Ошибка загрузки данных');
      console.error('Error fetching data:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 30000); // Обновление каждые 30 секунд
    return () => clearInterval(interval);
  }, []);

  if (loading && !stats) {
    return (
      <Stack align="center" mt="xl">
        <Loader size="lg" />
        <Text>Загрузка данных...</Text>
      </Stack>
    );
  }

  if (error) {
    return (
      <Alert icon={<IconAlertCircle size="1rem" />} title="Ошибка" color="red" mt="xl">
        {error}
      </Alert>
    );
  }

  const isHealthy = health?.status === 'ok' || health?.status === 'healthy';

  return (
    <Stack gap="md">
      <Group justify="space-between" mb="md">
        <Title order={1}>Мониторинг системы</Title>
        <Badge
          color={isHealthy ? 'green' : 'red'}
          size="lg"
          leftSection={isHealthy ? <IconCheck size={16} /> : <IconX size={16} />}
        >
          {isHealthy ? 'Система работает' : 'Проблемы в системе'}
        </Badge>
      </Group>

      <Grid>
        {/* Health Status */}
        <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
          <Card shadow="sm" p="lg" radius="md" withBorder>
            <Stack gap="xs">
              <Text fw={500} size="lg">
                Статус здоровья
              </Text>
              <Group>
                <Badge color={isHealthy ? 'green' : 'red'} size="xl">
                  {health?.status || 'Unknown'}
                </Badge>
              </Group>
              {health && (
                <Stack gap="xs" mt="md">
                  {Object.entries(health)
                    .filter(([key]) => key !== 'status')
                    .map(([key, value]) => (
                      <Group key={key} justify="space-between">
                        <Text size="sm" c="dimmed">
                          {key}:
                        </Text>
                        <Text size="sm" fw={500}>
                          {String(value)}
                        </Text>
                      </Group>
                    ))}
                </Stack>
              )}
            </Stack>
          </Card>
        </Grid.Col>

        {/* Stats */}
        {stats && (
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Stack gap="xs">
                <Text fw={500} size="lg">
                  Общая статистика
                </Text>
                <Stack gap="xs" mt="md">
                  {Object.entries(stats).map(([key, value]) => (
                    <Group key={key} justify="space-between">
                      <Text size="sm" c="dimmed">
                        {key}:
                      </Text>
                      <Text size="sm" fw={500}>
                        {typeof value === 'object' ? JSON.stringify(value) : String(value)}
                      </Text>
                    </Group>
                  ))}
                </Stack>
              </Stack>
            </Card>
          </Grid.Col>
        )}

        {/* Bandwidth Stats */}
        {bandwidthStats && (
          <Grid.Col span={{ base: 12, md: 6, lg: 4 }}>
            <Card shadow="sm" p="lg" radius="md" withBorder>
              <Stack gap="xs">
                <Text fw={500} size="lg">
                  Статистика пропускной способности
                </Text>
                <Stack gap="xs" mt="md">
                  {Object.entries(bandwidthStats).map(([key, value]) => (
                    <Group key={key} justify="space-between">
                      <Text size="sm" c="dimmed">
                        {key}:
                      </Text>
                      <Text size="sm" fw={500}>
                        {typeof value === 'object' ? JSON.stringify(value) : String(value)}
                      </Text>
                    </Group>
                  ))}
                </Stack>
              </Stack>
            </Card>
          </Grid.Col>
        )}
      </Grid>

      {/* Nodes Statistics */}
      {nodesStats && (
        <Paper shadow="sm" p="lg" radius="md" withBorder>
          <Title order={3} mb="md">
            Статистика узлов
          </Title>
          {Array.isArray(nodesStats) ? (
            <Table>
              <Table.Thead>
                <Table.Tr>
                  {Object.keys(nodesStats[0] || {}).map((key) => (
                    <Table.Th key={key}>{key}</Table.Th>
                  ))}
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {nodesStats.map((node: any, index: number) => (
                  <Table.Tr key={index}>
                    {Object.values(node).map((value: any, i: number) => (
                      <Table.Td key={i}>
                        {typeof value === 'object' ? JSON.stringify(value) : String(value)}
                      </Table.Td>
                    ))}
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          ) : (
            <Stack gap="xs">
              {Object.entries(nodesStats).map(([key, value]) => (
                <Group key={key} justify="space-between">
                  <Text size="sm" c="dimmed">
                    {key}:
                  </Text>
                  <Text size="sm" fw={500}>
                    {typeof value === 'object' ? JSON.stringify(value) : String(value)}
                  </Text>
                </Group>
              ))}
            </Stack>
          )}
        </Paper>
      )}

      {/* Nodes Metrics */}
      {nodesMetrics && (
        <Paper shadow="sm" p="lg" radius="md" withBorder>
          <Title order={3} mb="md">
            Метрики узлов
          </Title>
          {Array.isArray(nodesMetrics) ? (
            <Table>
              <Table.Thead>
                <Table.Tr>
                  {Object.keys(nodesMetrics[0] || {}).map((key) => (
                    <Table.Th key={key}>{key}</Table.Th>
                  ))}
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {nodesMetrics.map((metric: any, index: number) => (
                  <Table.Tr key={index}>
                    {Object.values(metric).map((value: any, i: number) => (
                      <Table.Td key={i}>
                        {typeof value === 'object' ? JSON.stringify(value) : String(value)}
                      </Table.Td>
                    ))}
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          ) : (
            <Stack gap="xs">
              {Object.entries(nodesMetrics).map(([key, value]) => (
                <Group key={key} justify="space-between">
                  <Text size="sm" c="dimmed">
                    {key}:
                  </Text>
                  <Text size="sm" fw={500}>
                    {typeof value === 'object' ? JSON.stringify(value) : String(value)}
                  </Text>
                </Group>
              ))}
            </Stack>
          )}
        </Paper>
      )}
    </Stack>
  );
}

export default Dashboard;
