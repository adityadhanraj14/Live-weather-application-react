import { CardLoader, FullWidthLoader, PageLoader, ParragraphLoader, SmallTableLoader, SpinLoader } from './CommonComponents/Loader';
import Header from './Components/Header/header';
const AppV2 = () => {
    const isLoading=false;
    return (
        <>
            <Header/>
            {isLoading && <PageLoader/>}
            <FullWidthLoader/>
            <ParragraphLoader />
            <div className='relative bg-gray-800/50 flex justify-center item-center animate-pulse'><CardLoader/><SmallTableLoader /></div>
            {/* <SpinLoader isLoading/> */}
        </>
    );
};

export default AppV2;