import { Card, CardHeader, CardContent, Typography, Avatar } from "@mui/material";

interface PostCardProps {
  post: {
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
}

export default function PostCard({ post }: PostCardProps) {
  const userName = post.author?.name || "Usuário Desconhecido";
  const userBio = post.author?.profile?.bio || "Sem biografia.";
  const postTitle = post.title || "Sem título.";
  const postContent = post.content || "Sem conteúdo disponível.";
  const formattedDate = new Date(post.createdAt).toLocaleString();

  return (
    <Card sx={{ width: "100%", boxShadow: 3 }}>
      <CardHeader
        avatar={<Avatar>{userName.charAt(0)}</Avatar>} // Primeira letra do nome
        title={userName}
        subheader={formattedDate}
      />
      <CardContent>
        <Typography variant="h6">{postTitle}</Typography>
        <Typography variant="body1">{postContent}</Typography>
        <Typography variant="caption" color="text.secondary">
          {userBio}
        </Typography>
      </CardContent>
    </Card>
  );
}
