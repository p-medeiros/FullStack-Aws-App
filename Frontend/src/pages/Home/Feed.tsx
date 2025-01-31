import { useEffect, useState } from "react";
import { Stack, CircularProgress } from "@mui/material";
import SistemAPI from "../../api/SistemAPI";
import PostCard from "./PostCard";

interface Post {
  id: number;
  title: string;
  content?: string;
  author: {
    name?: string;
    profile?: {
      bio?: string;
    };
  };
  createdAt: string;
}

export default function Feed() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    SistemAPI.get("/posts")
      .then(({ data }) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao carregar posts:", error);
        setLoading(false);
      });
  }, []);

  return (
    <Stack spacing={2} width="100%" maxWidth="600px">
      {loading ? (
        <CircularProgress />
      ) : (
        posts.map((post) => <PostCard key={post.id} post={post} />)
      )}
    </Stack>
  );
}
