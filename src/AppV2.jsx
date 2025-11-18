import { CardLoader, FullWidthLoader, PageLoader, ParragraphLoader, SmallTableLoader, SpinLoader } from './CommonComponents/Loader';
import Header from './Components/Header/header';
import NavigationBar from './Components/NavigationBar';
import Today from './Components/Today';
const AppV2 = () => {
    const isLoading=false;
    return (
        <>
            <Header/>
            <div className='flex'>
            <div className='left w-full'>
                <NavigationBar/>
                <Today/>
            </div>
            <div className='rightBar ml-auto w-120px'>
                <CardLoader/>
                <SmallTableLoader />
            </div>
            </div>
            {isLoading && <PageLoader/>}
            <FullWidthLoader/>
            <ParragraphLoader />
            <div className='relative bg-gray-800/50 flex justify-center item-center animate-pulse'><CardLoader/><SmallTableLoader /></div>
            {/* <SpinLoader isLoading/> */}
        </>
    );
};

export default AppV2;