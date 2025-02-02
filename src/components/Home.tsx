import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Chart from '@components/Chart';
import Header from '@components/Header';
import SideBar from '@components/SideBar';
import Table from '@components/Table';
import { SideColSkeleton, MainColSkeleton } from '@components/Skeleton';
import { fetchProductData } from '@features/dataSlice';
import { RootState, AppDispatch } from '../store/store';

const Home: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const { productData, status } = useSelector((state: RootState) => state.data);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProductData());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return (
            <div className="home h-screen flex flex-col">
                <Header />
                <div className="grid grid-cols-1 lg:grid-cols-5 mx-4 mt-12 mb-4 gap-4 h-full">
                    <SideColSkeleton />
                    <MainColSkeleton />
                </div>
            </div>
        );
    }

    if (status === 'failed' || !productData.length) {
        return <div>Failed to load product data</div>;
    }

    return (
        <div className="home flex flex-col">
            <Header />
            <div className="home__content grid grid-cols-1 lg:grid-cols-5 mx-4 mt-12 mb-4 gap-4">
                <div className="bg-white shadow lg:col-span-1">
                    <SideBar data={productData} />
                </div>
                <div className="flex flex-col lg:col-span-4 gap-4">
                    <div className="bg-white shadow lg:col-span-3 flex flex-col h-[500px]">
                        <Chart data={productData[0].sales} />
                    </div>
                    <div className="bg-white shadow lg:col-span-2 flex flex-col h-full overflow-x-auto">
                        <Table data={productData[0].sales} />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Home;