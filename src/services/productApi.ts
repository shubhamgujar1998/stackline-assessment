import ProductData from '../assets/stackline_frontend_assessment_data_2021.json';

export const fetchProductSalesData = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(ProductData);
        }, 500);
    });
};
