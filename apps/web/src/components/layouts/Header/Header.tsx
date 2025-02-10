export const Header = () => {
  return (
    <header className="px-4 pt-6 pb-3 lg:px-16 lg:pt-16 lg:pb-0">
      <div className="container mx-auto">
        <div className="relative py-2 md:py-6">
          <div className="absolute top-0 left-0 right-0 border-t-[2px] border-gray-900" />
          <div className="absolute top-2 left-0 right-0 border-t-[1px] border-gray-900" />
          <h1 className="text-4xl lg:text-6xl font-bold text-center font-zilla-slab leading-tight">
            The Internal Times
          </h1>
          <div className="absolute bottom-2 left-0 right-0 border-t-[1px] border-gray-900" />
          <div className="absolute bottom-0 left-0 right-0 border-t-[2px] border-gray-900" />
        </div>
      </div>
    </header>
  );
};
