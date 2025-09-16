import type { AxiosInstance } from 'axios';
import type { Product, PaymentMethod, Seller, AdBanner} from '../interfaces/types';

export default function WorkflowServices(http: AxiosInstance) {
  return {
    async listProducts(q = '', limit = 20, offset = 0) {
      const { data } = await http.get<{ total: number; items: Product[] }>('products', { params: { q, limit, offset } });
      return data;
    },
    async getProduct(id: string) {
      const { data } = await http.get<Product>(`products/${id}`);
      return data;
    },
    async getProductDescription(id: string) {
      const { data } = await http.get<{ id: string; description: string }>(`products/${id}/description`);
      return data;
    },
    async getProductSellerRef(id: string) {
      const { data } = await http.get<{ seller_id: string }>(`products/${id}/seller`);
      return data;
    },
    async getSimilar(id: string, limit = 6) {
      const { data } = await http.get<Product[]>(`products/${id}/similar`, { params: { limit } });
      return data;
    },
    async getRelated(id: string, limit = 6) {
      const { data } = await http.get<Product[]>(`products/${id}/related`, { params: { limit } });
      return data;
    },
    async getPaymentMethods() {
      const { data } = await http.get<PaymentMethod[]>('payments/methods');
      return data;
    },
    async getSeller(id: string) {
      const { data } = await http.get<Seller>(`sellers/${id}`);
      return data;
    },
    async getAds() {
      const { data } = await http.get<AdBanner[]>('ads');
      return data;
    },
  };
}
