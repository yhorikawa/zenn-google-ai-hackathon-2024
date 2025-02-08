export const TopicTitle = ({ title }: { title: string | null }) => {
  if (!title) return null;
  return (
    <h2 className="font-serif font-bold text-2xl leading-snug">{title}</h2>
  );
};
