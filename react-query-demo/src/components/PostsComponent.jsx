import { useQuery } from 'react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return response.json();
};

function PostsComponent() {
  const { data, iserror, isLoading, refetch } = useQuery('posts', fetchPosts, {
    staleTime: 5000,
    cacheTime: 10000,
    refetchOnWindowFocus: false, 
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (iserror) return <p>Error fetching posts: {iserror.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>Refresh Posts</button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
