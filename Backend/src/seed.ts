import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function Populete() {
  console.log("🌱 Populando a base de dados...");

  // Criar usuários e seus perfis
  const user1 = await prisma.user.upsert({
    where: { email: "pedro@example.com" },
    update: {},
    create: {
      name: "Pedro Medeiros",
      email: "pedro@example.com",
      profile: {
        create: {
          bio: "Desenvolvedor Full Stack apaixonado por tecnologia.",
        },
      },
      posts: {
        create: [
          { title: "Primeiro post do Pedro", content: "Conteúdo do primeiro post" },
          { title: "Segundo post do Pedro", content: "Mais conteúdo do Pedro" },
        ],
      },
    },
  });

  const user2 = await prisma.user.upsert({
    where: { email: "joao@example.com" },
    update: {},
    create: {
      name: "João Silva",
      email: "joao@example.com",
      profile: {
        create: {
          bio: "Entusiasta de programação e IA.",
        },
      },
      posts: {
        create: [
          { title: "Primeiro post do João", content: "Post incrível do João" },
          { title: "Segundo post do João", content: "Outro post do João sobre tecnologia" },
        ],
      },
    },
  });

  console.log("✅ População concluída!");
}
