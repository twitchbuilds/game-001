import Visits from "./Visits";

// Placeholder: chat's first idea replaces this page.
export default function Home() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", textAlign: "center", padding: 24 }}>
      <div>
        <h1 style={{ color: "var(--accent)", fontSize: "clamp(40px, 9vw, 96px)", margin: "0 0 12px" }}>Twitch Builds a Game</h1>
        <p style={{ fontSize: "clamp(18px, 3vw, 28px)", opacity: 0.85, margin: 0 }}>Chat designs it. The AI codes it. Everyone plays it.</p>
        <p style={{ fontSize: "clamp(16px, 2.4vw, 22px)", opacity: 0.6, marginTop: 40 }}>Nothing here yet. Chat is voting on the first idea.</p>
        <Visits />
      </div>
    </main>
  );
}
