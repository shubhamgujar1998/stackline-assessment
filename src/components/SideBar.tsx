import React from 'react';
import { Card, CardContent, CardMedia, Typography, Chip, Box, Divider} from '@mui/material';
import { ProductData } from '@/types/productTypes.ts';
import '../App.css';

type SideBarProps = {
    data: ProductData[];
};

const SideBar: React.FC<SideBarProps> = ({ data }) => {
    const { image, subtitle, tags, title } = data[0];

    return (
        <Card sx={{ textAlign: 'center', margin: 'auto', mt: 2, borderRadius: 0 }}>
            <CardMedia
                component="img"
                image={image}
                alt={title}
                sx={{ maxHeight: 300, objectFit: 'contain' }}
            />
            <CardContent>
                <Typography variant="h5" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
                    {subtitle}
                </Typography >
                <Divider sx={{ mt: 2 }}/>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 1, mt: 2 }}>
                    {tags.map((tag) => (
                        <Chip key={tag} label={tag} variant="outlined" sx={{ borderRadius: 2 }} />
                    ))}
                </Box>
            </CardContent>
        </Card>
    );
};

export default SideBar;