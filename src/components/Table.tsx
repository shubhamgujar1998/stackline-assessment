import React from 'react';
import { ProductData } from '@/types/productTypes.ts';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { Container, Box } from '@mui/material';

type TableProps = {
    data: ProductData['sales'];
};

const columns: GridColDef[] = [
    { field: 'weekEnding', headerName: 'WEEK ENDING', flex: 1 },
    { field: 'retailSales', headerName: 'RETAIL SALES', flex: 1, valueFormatter: (value: number) => `$${(value).toLocaleString()}` },
    { field: 'wholesaleSales', headerName: 'WHOLESALE SALES', flex: 1, valueFormatter: (value: number) => `$${(value).toLocaleString()}` },
    { field: 'unitsSold', headerName: 'UNITS SOLD', flex: 1 },
    { field: 'retailerMargin', headerName: 'RETAILER MARGIN', flex: 1, valueFormatter: (value: number) => `$${(value).toLocaleString()}` },
];

const Table: React.FC<TableProps> = ({ data }) => {
    
    const rows = data.map((entry, index) => ({
        id: index + 1,
        weekEnding: entry.weekEnding.split('-').slice(1).concat(entry.weekEnding.split('-')[0]).join('-'),
        retailSales: entry.retailSales,
        wholesaleSales: entry.wholesaleSales,
        unitsSold: entry.unitsSold,
        retailerMargin: entry.retailerMargin,
    }));

    return (
        <Container maxWidth={false} disableGutters sx={{ px: 3, mt: 2 }}>
            <Box sx={{ minHeight: 600, width: '100%' }}>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    getRowId={(row) => row.weekEnding}
                    aria-label='Product Sales Table based on Week Ending date'
                    initialState={{
                        pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                        },
                    }} 
                    pageSizeOptions={[10, 25, 100]}
                    sx={{ border: 0,
                        '& .MuiDataGrid-columnHeader:hover': {
                            color: 'primary.main',
                            fontWeight: 'bold',
                        },
                        '& .MuiDataGrid-columnHeaderTitle': {
                            fontWeight: 'bold',
                        }
                    }}
                />
            </Box>
        </Container>
    );
};

export default Table;