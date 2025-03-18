import React from 'react';
import { useQuery } from 'react-query';

function fetchPosts() {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    });
}

function PostsComponent() {
  const { data, error, isLoading, isError, refetch } = useQuery('posts', fetchPosts, {
    staleTime: 5000, 
    cacheTime: 10000, 
    refetchOnWindowFocus: false, 
    keepPreviousData: true, 
  });

  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Posts</h2>
      <button onClick={() => refetch()}>Refetch Posts</button>
      <ul>
        {data.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostsComponent;
