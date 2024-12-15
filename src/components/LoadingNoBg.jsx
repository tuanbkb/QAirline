function LoadingNoBg() {
    return (
        <div className="relative w-full h-60">
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 border-t-4 border-b-4 border-theme-primary rounded-full animate-spin"></div>
            </div>
        </div>
    );
}

export default LoadingNoBg;