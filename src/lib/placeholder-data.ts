export type BlogPost = {
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    category: "Physics" | "Projects" | "Opinions";
    readTime: string;
    content: string;
};

export const blogPosts: BlogPost[] = [
    {
        slug: "quantum-entanglement-explained",
        title: "Quantum Entanglement: A Spooky Action",
        excerpt: "Exploring the non-local properties of particles and what it means for the future of communication.",
        date: "2024-01-15",
        category: "Physics",
        readTime: "5 min read",
        content: `
      <p>Quantum entanglement is a physical phenomenon that occurs when a group of particles are generated, interact, or share spatial proximity in a way such that the quantum state of each particle of the group cannot be described independently of the state of the others, including when the particles are separated by a large distance.</p>
      <h3>The Einstein-Podolsky-Rosen paradox</h3>
      <p>This behavior appeared to contradict the principle of local realism, which implies that information about the state of a system should only be mediated by interactions with its immediate surroundings.</p>
      <p>However, experiments have consistently confirmed that entanglement is a real feature of the universe. It serves as the basis for emerging technologies like quantum computing and quantum cryptography.</p>
    `,
    },
    {
        slug: "building-antigravity",
        title: "Building the Antigravity Blog",
        excerpt: "How I built this personal site using Next.js, TypeScript, and a love for dark mode.",
        date: "2024-01-04",
        category: "Projects",
        readTime: "3 min read",
        content: `
      <p>This blog was built with a specific aesthetic in mind: <strong>Antigravity</strong>. I wanted it to feel weightless, dark, and energetic.</p>
      <h3>Tech Stack</h3>
      <ul>
        <li>Next.js App Router for structure and performance.</li>
        <li>TypeScript for type safety.</li>
        <li>Vanilla CSS Modules because sometimes you just need raw control.</li>
        <li>Framer Motion for those buttery smooth animations.</li>
      </ul>
      <p>The challenge was ensuring high performance while maintaining a rich visual experience. Using CSS variables for the theming allowed for easy tweaks to the "Neon" palette.</p>
    `,
    },
    {
        slug: "future-of-ai",
        title: "The Future of AI in Scientific Research",
        excerpt: "Why artificial intelligence will be the most important tool for physicists in the next decade.",
        date: "2023-12-20",
        category: "Opinions",
        readTime: "7 min read",
        content: `
      <p>AI is not just for generating images or chat. In physics, it's becoming an indispensable tool for analyzing massive datasets from particle accelerators and telescopes.</p>
      <p>We are seeing neural networks that can solve differential equations orders of magnitude faster than traditional numerical methods.</p>
    `,
    },
    {
        slug: "general-relativity",
        title: "Visualizing General Relativity",
        excerpt: "Understanding the curvature of spacetime through interactive simulations.",
        date: "2023-11-10",
        category: "Physics",
        readTime: "10 min read",
        content: `
      <p>Gravity is not a force, but a curvature of spacetime caused by mass and energy. This concept, introduced by Einstein, changed our understanding of the universe forever.</p>
      <p>Visualizing this in 3D is difficult, but imagine a heavy ball on a trampoline...</p>
    `,
    },
];
