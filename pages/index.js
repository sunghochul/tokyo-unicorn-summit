export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '720px', margin: '0 auto' }}>
      <header style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem' }}>Tokyo Unicorn Summit 2025</h1>
        <p style={{ fontSize: '1.25rem', color: '#555' }}>Official Website of the Tokyo Unicorn Summit</p>
      </header>

      <section style={{ marginBottom: '2rem' }}>
        <h2>About</h2>
        <p>
          The Tokyo Unicorn Summit connects top-tier startups from Korea, Taiwan, and across Asia with Japanese enterprises,
          venture capital firms, and government stakeholders. Hosted by the Tokyo Unicorn Summit Organization
          (一般社団法人 東京ユニコーンサミット運営機構), the summit fosters cross-border innovation through strategic business matching,
          proof-of-concept (PoC) collaborations, and global exposure.
        </p>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Program</h2>
        <ul>
          <li>Keynotes by Unicorn CEOs and Leading Investors</li>
          <li>Startup × Corporate PoC Matching Sessions</li>
          <li>VC Roundtable Dialogues</li>
          <li>Global Startup Showcases</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>How to Join</h2>
        <p>
          Participation is by invitation only. If your startup or organization is interested in attending the summit,
          please reach out to us via the contact information below.
        </p>
      </section>

      <section style={{ marginBottom: '3rem' }}>
        <h2>Contact</h2>
        <p>Email: <a href="mailto:info@tokyounicornsummit.org">info@tokyounicornsummit.org</a></p>
        <p>Organizer: Tokyo Unicorn Summit Organization (一般社団法人 東京ユニコーンサミット運営機構)</p>
        <p>Location: Minato-ku, Tokyo (Virtual Office)</p>
      </section>

      <footer style={{ fontSize: '0.9rem', color: '#888', textAlign: 'center' }}>
        &copy; 2025 Tokyo Unicorn Summit Organization. All rights reserved.
      </footer>
    </main>
  );
}
