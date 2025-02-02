import Skeleton from '@mui/material/Skeleton';
import {Box, Card, Divider} from '@mui/material';

export const SideColSkeleton: React.FC = () => (
    <Card sx={{ textAlign: 'center', margin: 'auto', borderRadius: 0, width: '100%', height: '100%' }} >
        <Skeleton animation="wave" variant="rounded" sx={{ width: '100%'}} height={300} />
        <Box display="flex" flexDirection="column" alignItems="center" width="100%">
            <Skeleton animation="wave" variant="text" width="50%" sx={{ mt: 2 }}/>
            <Skeleton animation="wave" variant="text" width="60%" sx={{ mt: 2 }}/>
            <Skeleton animation="wave" variant="text" width="30%" />
        </Box>
        <Divider sx={{ mt: 2 }}/>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 4, mt: 2, pl: 2 }}>
            {[1, 2, 3, 4].map((tag: number) => (
                <Skeleton animation="wave" key={tag} variant="text" height="40px" width="50px" sx={{ borderRadius: 2 }}  />
            ))}
        </Box>
    </Card>
);

export const MainColSkeleton = () => (
    <div className="flex flex-col lg:col-span-4 gap-4">
        <Skeleton animation="wave" variant="rectangular" width="100%" height="800px" />
        <Skeleton animation="wave" variant="rectangular" width="100%" height="100%" />
    </div>
);