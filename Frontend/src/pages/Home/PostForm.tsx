import { useFormik } from 'formik';
import { TextField, Button, Stack, Box } from '@mui/material';
import SistemAPI from '../../api/SistemAPI';
import { useAppContext } from '../../AppContext';

interface PostFormProps {
  initialValues?: {
    id?: number;
    title: string;
    content: string;
  };
  onCancel: () => void;
}

export default function PostForm({ initialValues, onCancel }: PostFormProps) {
  const { addPost, updatePost, setPosts,posts } = useAppContext();

  const formik = useFormik({
    initialValues: initialValues || { title: '', content: '' },
    onSubmit: async (values, { resetForm }) => {
      try {
        if (initialValues?.id) {
          // Editar post existente
          const response = await SistemAPI.put(`/posts/${initialValues.id}`, values);
          setPosts(posts.map((post) => (post.id === initialValues?.id ? response.data : post)));
          // updatePost(initialValues.id, values);
        } else {
            console.log('value', values)
          // Criar novo post
          const response = await SistemAPI.post('/posts', {...values, published: true, authorId: 1});
          setPosts([...posts, response.data]);
          // addPost({...values, published: true, authorId: 1});
        }
        resetForm(); // Limpa o formulário após o envio
        onCancel(); // Fecha o formulário
      } catch (error) {
        console.error('Erro ao salvar post:', error);
      }
    },
  });

  return (
    <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 2 }}>
      <Stack spacing={2}>
        <TextField
          name="title"
          label="Título"
          value={formik.values.title}
          onChange={formik.handleChange}
          fullWidth
          required
        />
        <TextField
          name="content"
          label="Conteúdo"
          value={formik.values.content}
          onChange={formik.handleChange}
        //   multiline
        //   rows={4}
          fullWidth
          required
        />
        <Stack direction="row" spacing={2} justifyContent="flex-end">
          <Button type="button" onClick={onCancel}>
            Cancelar
          </Button>
          <Button type="submit" variant="contained">
            Salvar
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}