ARG BUN_VERSION=1.1.43

ARG YARN_PKG_MANAGER="this.packageManager=\"yarn@1.22.22\""
ARG BUN_PKG_MANAGER="this.packageManager=\"bun@${BUN_VERSION}\""

FROM oven/bun:${BUN_VERSION} AS bun
WORKDIR /app

FROM oven/bun:${BUN_VERSION}-alpine AS bun-alpine
WORKDIR /app

# ================= TURBO PRUNE ===================

FROM bun AS pruned
ARG YARN_PKG_MANAGER
COPY . .
RUN bunx json -I -f package.json -e ${YARN_PKG_MANAGER}
RUN bunx turbo prune server --docker

# =============== INSTALL & BUILD =================

FROM bun AS builder
ARG BUN_PKG_MANAGER
COPY --from=pruned /app/out/full/ .
RUN bunx json -I -f package.json -e ${BUN_PKG_MANAGER}
RUN bun install --frozen-lockfile

# ================== RELEASE ======================

FROM bun-alpine AS runner
ENV NODE_ENV=production

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/apps/server/src/ ./src

EXPOSE 3000

USER bun
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["bun", "run", "src/index.ts"]
