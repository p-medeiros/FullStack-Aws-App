Ah, entendi! Vamos corrigir isso. Vou disponibilizar o conteúdo diretamente aqui para que você possa copiá-lo facilmente:

---

# **Guia Completo: Configuração de PostgreSQL, pgAdmin e Adminer no Docker**

Este guia explica como configurar o PostgreSQL, pgAdmin e Adminer utilizando o Docker, com todos os containers rodando na mesma rede. Também está incluído um exemplo de `docker-compose.yml`.

---

## **1️⃣ Criar Rede Docker**

Antes de iniciar os containers, crie uma rede Docker para que os serviços possam se comunicar:

```bash
docker network create pg_network
```

---

## **2️⃣ Configurar PostgreSQL**

### Comando Docker:
```bash
docker run -d \
  --name my_postgres \
  --network pg_network \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=123456@ \
  -e POSTGRES_DB=postgres \
  -p 5432:5432 \
  postgres
```

### Variáveis de Ambiente:
| Variável              | Valor         |
|-----------------------|---------------|
| **POSTGRES_USER**     | `postgres`    |
| **POSTGRES_PASSWORD** | `123456@`     |
| **POSTGRES_DB**       | `postgres`    |

- A porta 5432 será exposta para conexão externa.

---

## **3️⃣ Configurar pgAdmin**

### Comando Docker:
```bash
docker run -d \
  --name pgadmin \
  --network pg_network \
  -e PGADMIN_DEFAULT_EMAIL=admin@example.com \
  -e PGADMIN_DEFAULT_PASSWORD=admin \
  -p 8080:80 \
  dpage/pgadmin4
```

### Variáveis de Ambiente:
| Variável                  | Valor               |
|---------------------------|---------------------|
| **PGADMIN_DEFAULT_EMAIL** | `admin@example.com` |
| **PGADMIN_DEFAULT_PASSWORD** | `admin`         |

- Acesse pgAdmin em **[http://localhost:8080](http://localhost:8080)**.
- Use as credenciais acima para login.
- Conecte ao PostgreSQL adicionando um novo servidor com:
  - **Host**: `my_postgres`
  - **Porta**: `5432`
  - **Username**: `postgres`
  - **Password**: `123456@`

---

## **4️⃣ Configurar Adminer**

### Comando Docker:
```bash
docker run -d \
  --name adminer \
  --network pg_network \
  -p 8081:8080 \
  adminer
```

### Acesso ao Adminer:
- Acesse Adminer em **[http://localhost:8081](http://localhost:8081)**.
- Use as credenciais:
  - **Sistema**: PostgreSQL
  - **Servidor**: `my_postgres`
  - **Usuário**: `postgres`
  - **Senha**: `123456@`
  - **Database**: `postgres`

---

## **5️⃣ docker-compose.yml**

O arquivo abaixo cria e configura todos os serviços automaticamente:

```yaml
version: '3.8'
services:
  postgres:
    image: postgres
    container_name: my_postgres
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: 123456@
      POSTGRES_DB: postgres
    networks:
      - pg_network
    ports:
      - "5432:5432"

  pgadmin:
    image: dpage/pgadmin4
    container_name: pgadmin
    environment:
      PGADMIN_DEFAULT_EMAIL: admin@example.com
      PGADMIN_DEFAULT_PASSWORD: admin
    networks:
      - pg_network
    ports:
      - "8080:80"

  adminer:
    image: adminer
    container_name: adminer
    networks:
      - pg_network
    ports:
      - "8081:8080"

networks:
  pg_network:
    driver: bridge
```

---

## **6️⃣ Iniciar os Containers com docker-compose**

1. Salve o arquivo `docker-compose.yml` no diretório desejado.
2. Execute o seguinte comando:

```bash
docker-compose up -d
```

3. Verifique se os containers estão rodando:

```bash
docker ps
```

---

## **7️⃣ Acessos**

| Serviço      | URL                     | Usuário             | Senha        | Observação            |
|--------------|-------------------------|---------------------|--------------|-----------------------|
| **pgAdmin**  | [http://localhost:8080](http://localhost:8080) | admin@example.com | admin        | Interface web para gerenciar o PostgreSQL. |
| **Adminer**  | [http://localhost:8081](http://localhost:8081) | postgres           | 123456@      | Gerenciamento simples do PostgreSQL.      |
| **PostgreSQL** | `localhost:5432`      | postgres           | 123456@      | Banco de dados principal.                |

---

Com isso, você terá o PostgreSQL, pgAdmin e Adminer configurados e rodando na mesma rede. 🚀

Se precisar de mais ajuda, é só perguntar! 😊