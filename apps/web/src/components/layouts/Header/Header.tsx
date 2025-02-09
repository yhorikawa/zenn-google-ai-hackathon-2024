export const Header = () => {
  return (
    <header className="py-4 md:py-8 px-4">
      <div className="container mx-auto">
        <div className="relative py-2 md:py-6">
          <div className="absolute top-0 left-0 right-0 border-t-[2px] border-gray-900" />
          <div className="absolute top-2 left-0 right-0 border-t-[1px] border-gray-900" />
          <h1 className="text-4xl sm:text-5lx md:text-6xl font-bold text-center text-gray-900 font-serif leading-loose">
            The Internal Times
          </h1>
          <div className="absolute bottom-2 left-0 right-0 border-t-[1px] border-gray-900" />
          <div className="absolute bottom-0 left-0 right-0 border-t-[2px] border-gray-900" />
        </div>
      </div>
    </header>
  );
};
