async function getPostById(postId: any) {
  const response = await fetch(`http://localhost:3000/api/posts/${postId}`, {
    //fetch dispo uniquement dasn les composants server ET toujours ajouter http://local.. devant l'url
    method: "GET",
  });
  return response.json();
}

export default async function PostId({ params }: any) {
  const { post } = await getPostById(params.id);

  console.log(post);
  return (
    <div className="">
      Post page params : {params.id}
      <div className="">Title: {post.title}</div>
    </div>
  );
}
