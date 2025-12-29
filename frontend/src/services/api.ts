import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  timeout: 10000,
});

export interface Stats {
  [key: string]: any;
}

export interface BandwidthStats {
  [key: string]: any;
}

export interface NodesStatistics {
  [key: string]: any;
}

export interface Health {
  status: string;
  [key: string]: any;
}

export interface NodesMetrics {
  [key: string]: any;
}

export const systemApi = {
  getStats: async (): Promise<Stats> => {
    const response = await api.get('/system/stats');
    return response.data;
  },

  getBandwidthStats: async (): Promise<BandwidthStats> => {
    const response = await api.get('/system/stats/bandwidth');
    return response.data;
  },

  getNodesStatistics: async (): Promise<NodesStatistics> => {
    const response = await api.get('/system/stats/nodes');
    return response.data;
  },

  getHealth: async (): Promise<Health> => {
    const response = await api.get('/system/health');
    return response.data;
  },

  getNodesMetrics: async (): Promise<NodesMetrics> => {
    const response = await api.get('/system/nodes/metrics');
    return response.data;
  },
};


