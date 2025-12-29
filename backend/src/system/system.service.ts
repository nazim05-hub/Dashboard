import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class SystemService {
  private readonly remnawaveApiUrl: string;
  private readonly remnawaveApiKey: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.remnawaveApiUrl = this.configService.get<string>('REMNAWAVE_API_URL') || '';
    this.remnawaveApiKey = this.configService.get<string>('REMNNAWAVE_API_KEY') || '';
  }

  private getHeaders() {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    
    if (this.remnawaveApiKey) {
      headers['Authorization'] = `Bearer ${this.remnawaveApiKey}`;
    }

    return headers;
  }

  async getStats() {
    try {
      const response = await firstValueFrom(
        this.httpService.get(`${this.remnawaveApiUrl}/api/system/stats`, {
          headers: this.getHeaders(),
        }),
      );
      return response.data;
    } catch (error: any) {
      throw new HttpException(
        error.response?.data || 'Failed to fetch stats',
        error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getBandwidthStats() {
    try {
      const response = await firstValueFrom(
        this.httpService.get(`${this.remnawaveApiUrl}/api/system/stats/bandwidth`, {
          headers: this.getHeaders(),
        }),
      );
      return response.data;
    } catch (error: any) {
      throw new HttpException(
        error.response?.data || 'Failed to fetch bandwidth stats',
        error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getNodesStatistics() {
    try {
      const response = await firstValueFrom(
        this.httpService.get(`${this.remnawaveApiUrl}/api/system/stats/nodes`, {
          headers: this.getHeaders(),
        }),
      );
      return response.data;
    } catch (error: any) {
      throw new HttpException(
        error.response?.data || 'Failed to fetch nodes statistics',
        error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getHealth() {
    try {
      const response = await firstValueFrom(
        this.httpService.get(`${this.remnawaveApiUrl}/api/system/health`, {
          headers: this.getHeaders(),
        }),
      );
      return response.data;
    } catch (error: any) {
      throw new HttpException(
        error.response?.data || 'Failed to fetch health status',
        error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async getNodesMetrics() {
    try {
      const response = await firstValueFrom(
        this.httpService.get(`${this.remnawaveApiUrl}/api/system/nodes/metrics`, {
          headers: this.getHeaders(),
        }),
      );
      return response.data;
    } catch (error: any) {
      throw new HttpException(
        error.response?.data || 'Failed to fetch nodes metrics',
        error.response?.status || HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}


