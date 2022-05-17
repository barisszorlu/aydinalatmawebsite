export class Product {
  productId: string;
  productCategoryId: string;
  productImageSrc: string;
  productCategoryName: string;
  productName: string;
  productDetail: ProductDetail;
}

export class ProductDetail {
  description: string;
  attributes?: string[];
}