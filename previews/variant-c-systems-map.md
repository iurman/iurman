<div align="center">

<h1>Isaac Urman</h1>

<h3>Product Engineer &amp; Team Lead</h3>

<p><i>the app, the systems behind it, and the infrastructure it runs on</i></p>

<p>
  <a href="https://isaacurman.com"><b>Portfolio</b></a>
  &nbsp;&#183;&nbsp;
  <a href="https://isaacurman.com/blog"><b>Blog</b></a>
  &nbsp;&#183;&nbsp;
  <a href="https://www.linkedin.com/in/isaac-urman/"><b>LinkedIn</b></a>
  &nbsp;&#183;&nbsp;
  <a href="mailto:contact@isaacurman.com"><b>Email</b></a>
</p>

</div>

Most engineers own one layer of this. I own all four, and I'm the one who gets paged when the
bottom one breaks.

```mermaid
flowchart LR
    A["PRODUCT<br/>what users and<br/>ops teams need"]
    B["APPLICATION<br/>Next.js · React<br/>tRPC · Drizzle · Postgres"]
    C["SYSTEMS<br/>CI/CD · gated migrations<br/>Prometheus · Grafana · Loki"]
    D["INFRASTRUCTURE<br/>Docker · Coolify · Proxmox<br/>Cloudflare · Tailscale · AWS"]

    A --> B --> C --> D
    D -.->|"pages me at 3 a.m."| A
```

Right now that column is an enterprise CRM used by 1,000+ people, built by a team of 15+ engineers
I lead at Tasty LLC. I designed the architecture, built the finance module end to end, set up the
observability stack, and still write a lot of the code.

## Projects

| Project | What it is | Stack |
| :-- | :-- | :-- |
| **[ResuPals](https://resupals.com)** &#183; [code](https://github.com/iurman/resupals) | ATS-optimized resume and cover letter builder. Guest mode keeps everything in your browser with no account and nothing sent to a server. Sign in and documents sync to your own private cloud. | `Next.js` `TypeScript` `Cloudflare Workers` `D1` |
| **[Ephemera](https://ephemera.isaacurman.com)** &#183; [code](https://github.com/iurman/ephemera) | Self-hosted secret sharing. Text, links, and files are encrypted in the browser, expire by time or view count, then get erased from storage. | `Next.js` `WebCrypto` `tRPC` `PostgreSQL` |
| **[Journey](https://github.com/iurman/Senior-Project)** | Career planning platform that pairs LLM guidance with live job board data. | `Python` `Django` `LLMs` `Firebase` |
| **[LAP](https://github.com/iurman/lap-fitness)** | Fitness tracker with interactive logging, social features, and calendar progress views. | `Flutter` `Dart` `Firestore` |

## Stack

<p align="center">
  <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/></a>
  <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/></a>
  <a href="https://www.python.org" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="python" width="40" height="40"/></a>
  <a href="https://www.java.com" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="java" width="40" height="40"/></a>
  <a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/></a>
  <a href="https://nextjs.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" alt="nextjs" width="40" height="40"/></a>
  <a href="https://nodejs.org" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/></a>
  <a href="https://www.djangoproject.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg" alt="django" width="40" height="40"/></a>
  <a href="https://fastapi.tiangolo.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg" alt="fastapi" width="40" height="40"/></a>
  <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/></a>
  <a href="https://www.mysql.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="mysql" width="40" height="40"/></a>
  <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/></a>
  <a href="https://www.docker.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/></a>
  <a href="https://kubernetes.io" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg" alt="kubernetes" width="40" height="40"/></a>
  <a href="https://aws.amazon.com" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="aws" width="40" height="40"/></a>
  <a href="https://git-scm.com/" target="_blank" rel="noreferrer"><img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/></a>
  <a href="https://www.linux.org/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/></a>
  <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"><img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/></a>
  <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"><img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/></a>
  <a href="https://flutter.dev" target="_blank" rel="noreferrer"><img src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg" alt="flutter" width="40" height="40"/></a>
  <a href="https://www.salesforce.com/" target="_blank" rel="noreferrer"><img src="https://www.vectorlogo.zone/logos/salesforce/salesforce-icon.svg" alt="salesforce" width="40" height="40"/></a>
  <a href="https://grafana.com/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/grafana/grafana-original.svg" alt="grafana" width="40" height="40"/></a>
  <a href="https://prometheus.io/" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/prometheus/prometheus-original.svg" alt="prometheus" width="40" height="40"/></a>
</p>

<details>
<summary><b>Where I've done this before</b></summary>

<br>

| Years | Role | What I owned |
| :-- | :-- | :-- |
| 2025 to now | **Senior Software Engineer & Team Lead**, Tasty LLC | Architecture for a TypeScript monorepo, the finance module (payments, invoicing, P&L, 2FA), the observability stack, and CI/CD with senior-gated migrations |
| 2024 to 2025 | **Software Engineer**, Eustace Consulting | Apex, LWC, and Visualforce across 6+ client orgs. Large programmatic data migrations, and automated billing and invoicing workflows |
| 2024 | **System Administrator Co-op**, MIT Lincoln Laboratory | Containerized a real-time scheduling app, built the GitLab CI/CD pipeline, added MySQL connection pooling, ran the team's Linux servers |
| 2022 to 2024 | **Backend Developer, then Assembly Tech III**, SuperLogics | QuickBooks to NetSuite migrations in Python, invoice automation, internal tooling. Promoted through three technician levels leading a floor team of 10 |
| 2018 to now | **Founder & Systems Operator**, self-run game hosting | Multi-tenant provisioning, tenant isolation, Prometheus and Grafana with Discord alerting, 100+ concurrent players per instance |

**B.S. Computer Science**, minor in Data Science, Wentworth Institute of Technology, Boston

</details>

<details>
<summary><b>What I actually reach for</b></summary>

<br>

| How often | Tools |
| :-- | :-- |
| **Daily** | `TypeScript` `React` `Next.js` `tRPC` `Drizzle` `PostgreSQL` `Docker` `GitHub Actions` `Claude Code` |
| **Regularly** | `Python` `Node.js` `Tailwind` `Prometheus` `Grafana` `Loki` `Coolify` `Cloudflare` `Linux` `Salesforce` |
| **Have shipped with** | `Java` `Flutter` `Dart` `Django` `FastAPI` `Kubernetes` `AWS` `Redis` `MongoDB` `Firebase` `Ansible` `Apex` `LWC` |

</details>

<details>
<summary><b>What the homelab actually runs</b></summary>

<br>

Proxmox for virtualization, TrueNAS for storage, Tailscale for access, Unifi for segmentation,
Coolify for deploys, and Prometheus and Grafana watching all of it with alerts landing in Discord.
It hosts my own projects and paying game server customers, split between home hardware and VPS
providers to balance cost against exposure.

[Homelab writeup](https://isaacurman.com/projects/homelab-infrastructure) &#183;
[Observability with Prometheus and Grafana](https://isaacurman.com/blog/prometheus-grafana-monitoring) &#183;
[Self-hosting with Coolify and Cloudflare](https://isaacurman.com/blog/self-hosting-coolify-cloudflare)

</details>

## Writing

<!-- WRITING:START -->

- [Rebuilding Ephemera as a Zero-Knowledge Secret Sharing App](https://isaacurman.com/blog/rebuilding-ephemera-zero-knowledge)
- [Agentic Coding in a Production Monorepo: The Harness Matters More Than the Model](https://isaacurman.com/blog/agentic-coding-in-production)
- [Deploying Ephemera with Coolify and Traefik](https://isaacurman.com/blog/deploying-ephemera-coolify-traefik)
- [Building ResuPals - A Privacy-First Resume Builder](https://isaacurman.com/blog/building-resupals-privacy-first-resume-builder)

<!-- WRITING:END -->

<div align="center">

<a href="https://isaacurman.com"><b>isaacurman.com</b></a>

</div>
