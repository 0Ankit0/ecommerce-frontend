type optionsType = {
  options?: string[];
};

export default function HoverOptions({ options }: optionsType) {
  return (
    <div className=" absolute right-[-13rem] top-0  bg-white/70 h-[450px] z-10 px-3 py-5 rounded-r-xl leading-8 w-[200px]">
      {options ? (
        options.map((option, index) => <li key={index}>{option}</li>)
      ) : (
        <ul>
          <li>Clothing</li>
          <li>Traditional Clothing</li>
          <li>Women's Bag</li>
          <li>Shoes</li>
          <li>Accessories</li>
          <li>Girl's Fashion</li>
        </ul>
      )}
    </div>
  );
}
