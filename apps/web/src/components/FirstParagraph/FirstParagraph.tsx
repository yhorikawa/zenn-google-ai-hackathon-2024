export const FirstParagraph = ({ text }: { text: string }) => {
  return (
    <p className="first-letter:uppercase first-letter:font-bold first-letter:text-7xl first-letter:mr-3 first-letter:float-left text-sm leading-loose font-serif">
      {text}
    </p>
  );
};
