// PostCard.tsx
import { Card, CardHeader, CardContent, Typography, Avatar, IconButton } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';
import { useAppContext } from '../../AppContext';

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
    } | undefined;
  };
  onEdit: () => void;
}

export default function PostCard({ post, onEdit }: PostCardProps) {
  const { deletePost } = useAppContext();

  const handleDelete = () => {
    deletePost(post.id);
  };

  return (
    <Card sx={{ width: '100%', boxShadow: 3 }}>
      <CardHeader
        avatar={<Avatar>{post.author?.name?.charAt(0)}</Avatar>}
        title={post.author?.name || 'Usuário Desconhecido'}
        subheader={new Date(post.createdAt).toLocaleString()}
        action={
          <>
            <IconButton onClick={onEdit}>
              <Edit />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <Delete />
            </IconButton>
          </>
        }
      />
      <CardContent>
        <Typography variant="h6">{post.title}</Typography>
        <Typography variant="body1">{post.content}</Typography>
      </CardContent>
    </Card>
  );
}