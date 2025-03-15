FROM oven/bun:1

WORKDIR /app

COPY package.json ./
COPY bun.lockb ./

RUN bun install

COPY . .

RUN bun run build

RUN bun run astro preferences disable devToolbar

EXPOSE 4321

CMD ["bun", "run", "preview", "--host", "0.0.0.0"] 
CMD ["bun", "run", "preview", "--host", "0.0.0.0"] 