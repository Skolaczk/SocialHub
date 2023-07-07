export const SearchBar = () => {
  return (
    <form
      action=""
      className="hidden md:flex justify-center mt-8 md:ml-20 xl:ml-0"
    >
      <input
        type="text"
        name="username"
        id="username"
        placeholder="Search"
        className="bg-neutral-500 w-full max-w-2xl rounded-sm p-2 text-sm"
      />
    </form>
  );
};
