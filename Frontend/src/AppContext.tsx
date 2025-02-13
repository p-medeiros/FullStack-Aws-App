import { createContext, useContext, useState, ReactNode } from 'react';
import SistemAPI from './api/SistemAPI';
// import SistemAPI from '../api/SistemAPI';

type Post = {
  id: number;
  title: string;
  content?: string;
  createdAt: string;
  author: {
    name?: string;
    profile?: {
      bio?: string;
    };
  };
};

type AppContextType = {
  posts: Post[];
  setPosts: (posts: Post[]) => void;
  addPost: (post: Post) => void;
  updatePost: (id: number, updatedPost: Partial<Post>) => void;
  deletePost: (id: number) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
}

export function AppProvider({ children }: { children: ReactNode }) {
  const [posts, setPosts] = useState<Post[]>([]);

  const addPost = async (post: Post) => {
    try {
      const response = await SistemAPI.post('/posts', post);
      setPosts([...posts, response.data]);
    } catch (error) {
      console.error('Erro ao adicionar post:', error);
    }
  };

  const updatePost = async (id: number, updatedPost: Partial<Post>) => {
    try {
      const response = await SistemAPI.put(`/posts/${id}`, updatedPost);
      setPosts(posts.map((post) => (post.id === id ? response.data : post)));
    } catch (error) {
      console.error('Erro ao atualizar post:', error);
    }
  };

  const deletePost = async (id: number) => {
    try {
      await SistemAPI.delete(`/posts/${id}`);
      setPosts(posts.filter((post) => post.id !== id));
    } catch (error) {
      console.error('Erro ao excluir post:', error);
    }
  };

  return (
    <AppContext.Provider
      value={{
        posts,
        setPosts,
        addPost,
        updatePost,
        deletePost,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}