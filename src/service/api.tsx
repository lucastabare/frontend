import axios from 'axios';
import WorkflowServices from './workflow.services';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL ?? '/api/v1',
  headers: { 'Content-Type': 'application/json' },
  timeout: 8000,
});

if (import.meta.env.DEV) {
  instance.interceptors.response.use(
    (r) => { console.log(`[API OK] ${r.config.method?.toUpperCase()} ${r.config.url} -> ${r.status}`, r.data); return r; },
    (e) => { console.error('[API ERR]', e?.config?.url, e?.message, e?.response?.data); return Promise.reject(e); }
  );
}

const api = { workflow: WorkflowServices(instance) };
export default api;
