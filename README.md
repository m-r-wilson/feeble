# feeble

Polyglot monorepo with Java, C#, and frontend (Vue + React) projects.

## Structure

| Area | Stack | Dev Container |
|------|-------|---------------|
| `java/` | Java 21, Spring Boot, Maven | `java/.devcontainer/` |
| `csharp/` | .NET 8, C# | `csharp/.devcontainer/` |
| `frontend/` | TypeScript, Vue 3, React 19, pnpm + Turborepo | `frontend/.devcontainer/` |

## Getting Started

Each area has its own Dev Container. Open any area folder in VS Code and select **Reopen in Container**.

- **Java**: `cd java && mvn spring-boot:run` (port 8080)
- **C#**: `cd csharp && dotnet run --project console-app`
- **Frontend**: `cd frontend && pnpm install && pnpm turbo dev` (ports 5173, 5174)
