function Loading() {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="w-20 h-20 border-t-4 border-b-4 border-theme-primary rounded-full animate-spin"></div>
        </div>
    );
}

export default Loading;
