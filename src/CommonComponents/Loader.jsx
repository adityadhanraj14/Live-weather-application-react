const SpinLoader = ({ isLoading = false, size = "md", width, height }) => {
    if (!isLoading) return null;
    const sizeMap = {
        sm: { w: "w-4", h: "h-4" },   // 16px
        md: { w: "w-6", h: "h-6" },   // 24px
        lg: { w: "w-10", h: "h-10" }, // 40px
    };

    const { w, h } = sizeMap[size] || sizeMap["md"];

    const finalWidth = width ? width : w;
    const finalHeight = height ? height : h;

    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div
                className={`${finalWidth} ${finalHeight} border-4 border-gray-300 border-b-gray-600 rounded-full animate-spin`}
            ></div>
        </div>
    );
};

// const CardLoader = () => {
//     return (
//         <div className="bg-gray-900 w-100 p-4 flex flex-rows-3 gap-3 justify-center item-center">
//             {[1, 2, 3].map((j) => (
//                 <div key={j}>
//                     {[1, 2, 3].map((i) => (
//                         <div
//                             key={i}
//                             className="h-6 w-24 bg-gray-400 animate-pulse rounded-full m-3"
//                         ></div>
//                     ))}
//                 </div>))}
//         </div>
//     );
// }
const CardLoader = () => {
  return (
    <div className="animate-pulse bg-gray-800/50 rounded-xl p-4 w-full h-40">
      <div className="h-6 w-1/3 bg-gray-700 rounded mb-4"></div>
      <div className="h-4 w-1/2 bg-gray-700 rounded mb-2"></div>
      <div className="h-4 w-1/4 bg-gray-700 rounded"></div>
    </div>
  );
};

const FullWidthLoader = () =>{
    return (
        <div className="w-full h-70 bg-gray-800 p-4 rounded">
            <div className="bg-gray-400 h-10 px-2 animate-pulse m-3 rounded-xl"></div>
            <div className="bg-gray-400 h-40 px-2 animate-pulse m-3 rounded-xl"></div>
        </div>
    )
}
// const pageLoader = () => {
//     return (null);
// }

const PageLoader = () => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <SpinLoader isLoading={true} size="lg"/>
    </div>
  );
};



export { SpinLoader, CardLoader, FullWidthLoader,  PageLoader }