export const Post = ({
  author,
  content,
}: {
  author: string;
  content: string;
}) => {
  return (
    <div>
      <b>{author}</b>
      <p>{content}</p>
    </div>
  );
};
