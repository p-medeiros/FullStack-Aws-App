import { useState, useEffect } from 'react';
import { Stack, CircularProgress, Button } from '@mui/material';
import SistemAPI from '../../api/SistemAPI';
import PostCard from './PostCard';
import PostForm from './PostForm';
import { useAppContext } from '../../AppContext';

export default function Feed() {
  const { posts, addPost, updatePost, deletePost, setPosts } = useAppContext();
  const [loading, setLoading] = useState(true);
  const [isAddingPost, setIsAddingPost] = useState(false);
  const [editingPostId, setEditingPostId] = useState<number | null>(null);

  // Carregar posts ao montar o componente
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await SistemAPI.get('/posts');
        setPosts(response.data);
      } catch (error) {
        console.error('Erro ao carregar posts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [setPosts]);

  const handleAddPost = () => {
    setIsAddingPost(true);
  };

  const handleCancel = () => {
    setIsAddingPost(false);
    setEditingPostId(null);
  };

  return (
    <Stack spacing={2} width="100%" maxWidth="600px">
      <Button variant="contained" onClick={handleAddPost}>
        Adicionar Post
      </Button>
      {isAddingPost && <PostForm onCancel={handleCancel} />}
      {loading ? (
        <CircularProgress />
      ) : (
        posts.map((post) =>
          editingPostId === post.id ? (
            <PostForm
              key={post.id}
              initialValues={{ ...post, content: post.content || '' }}
              onCancel={handleCancel}
            />
          ) : (
            <PostCard
              key={post.id}
              post={post}
              onEdit={() => setEditingPostId(post.id)}
            />
          )
        )
      )}
    </Stack>
  );
}