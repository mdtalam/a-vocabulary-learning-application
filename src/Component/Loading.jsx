const Loading = () => {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative w-16 h-16">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
          <div className="absolute top-1 left-1 w-12 h-12 border-4 border-t-transparent border-blue-300 rounded-full animate-spin-slow"></div>
          <div className="absolute top-3 left-3 w-8 h-8 border-4 border-t-transparent border-blue-200 rounded-full animate-spin-slower"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
