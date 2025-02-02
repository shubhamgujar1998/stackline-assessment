import React from 'react';
import { ProductData } from '@/types/productTypes.ts';
import { LineChart } from '@mui/x-charts';
import { Container, Box, Typography } from '@mui/material';
import '../App.css';

type SalesLineChartProps = {
    data: ProductData['sales'];
};

const Chart: React.FC<SalesLineChartProps> = ({ data }) => {
    const monthNames = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
    const monthlySalesMap = data.reduce((acc, entry) => {
        const date = new Date(entry.weekEnding);
        const monthYear = monthNames[date.getUTCMonth()];
        if (!acc[monthYear]) {
            acc[monthYear] = { retailSales: 0, wholesaleSales: 0 };
        }

        acc[monthYear].retailSales += entry.retailSales;
        acc[monthYear].wholesaleSales += entry.wholesaleSales;

        return acc;
    }, {} as Record<string, { retailSales: number; wholesaleSales: number }>);

    const sortedMonths = monthNames.filter(month => monthlySalesMap[month]);

    const sortedRetailSales = sortedMonths.map(month => monthlySalesMap[month].retailSales);
    const sortedWholesaleSales = sortedMonths.map(month => monthlySalesMap[month].wholesaleSales);

    const maxValue = Math.max(...sortedRetailSales, ...sortedWholesaleSales);
    const yAxisMax = Math.ceil(maxValue / 100000) * 100000;

    return (
        <Container maxWidth={false} disableGutters>
            <Typography variant="h6" component="div" sx={{ ml: 4, mt: 2}}>
                        Product Sales Chart 
            </Typography>
            <Box sx={{ width: '100%', height: '400px', paddingLeft: '20px', my: 2 }} className={"custom-y-padding-bottom"}>
                <LineChart
                    series={[
                        {
                            data: sortedRetailSales,
                            label: 'Retail Sales',
                            color: '#00C7BE',
                            valueFormatter: (value) => `$${value?.toLocaleString()}`,
                        },
                        {
                            data: sortedWholesaleSales,
                            label: 'Wholesale Sales',
                            color: '#4B9EF9',
                            valueFormatter: (value) => `$${value?.toLocaleString()}`,
                        },
                    ]}
                    xAxis={[{
                        data: sortedMonths,
                        scaleType: 'band',
                        label: 'Months in 2017',
                        labelStyle: { fontWeight: 'bold' },
                    }]}
                    yAxis={[{
                        min: 0,
                        max: yAxisMax,
                        tickNumber: 7,
                        valueFormatter: (value) => `$${(value).toLocaleString()}`,
                        label: 'Sales ($)',
                        labelStyle: { fontWeight: 'bold' },
                    }]}
                    slotProps={{
                        legend: {
                            direction: 'row',
                            position: { vertical: 'top', horizontal: 'middle' },
                            padding: 0,
                            labelStyle: { fontWeight: 'bold' },
                        },
                    }}
                    margin={{  left: 100 }}
                />
            </Box>
        </Container>
    );
};

export default Chart;