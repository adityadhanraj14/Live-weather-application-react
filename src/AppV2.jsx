import { CardLoader, FullWidthLoader, PageLoader, SpinLoader } from './CommonComponents/Loader';
import Header from './Components/Header/header';
import React from 'react';
const AppV2 = () => {
    const isLoading=false;
    return (
        <>
            <Header/>
            {isLoading && <PageLoader/>}
            <CardLoader/>
            <FullWidthLoader/>
            {/* <SpinLoader isLoading/> */}
        </>
    );
};

export default AppV2;