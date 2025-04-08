interface Commentsprops {
  comments: {
    name: string;
    email: string;
    body: string;
  };
}
const Commentlist = ({ comments }: Commentsprops) => {
  return (
    <>
      <h1>Comments name:{comments.name}</h1>
      <h1>Comments Email:{comments.email}</h1>
      <h1>Comments body:{comments.body}</h1>
    </>
  );
};

export default Commentlist;
