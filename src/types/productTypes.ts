type Review = {
    customer: string;
    review: string;
    score: number;
};

type Sale = {
    weekEnding: string;
    retailSales: number;
    wholesaleSales: number;
    unitsSold: number;
    retailerMargin: number;
};

type ProductData = {
    brand: string;
    details: string[];
    id: string;
    image: string;
    retailer: string;
    reviews: Review[];
    sales: Sale[];
    subtitle: string;
    tags: string[];
    title: string;
    [key: string]: string | string[] | Review[] | Sale[];
};

export type { ProductData, Review, Sale };

export default ProductData;