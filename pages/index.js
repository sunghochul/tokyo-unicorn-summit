export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 p-6">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2">Tokyo Unicorn Summit 2025</h1>
        <p className="text-lg">Official Website of the Tokyo Unicorn Summit</p>
      </header>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">About</h2>
        <p>
          The Tokyo Unicorn Summit connects top-tier startups from Korea, Taiwan, and across Asia with Japanese enterprises, VCs, and government partners. Organized by the Tokyo Unicorn Summit Organization (一般社団法人 東京ユニコーンサミット運営機構), the summit facilitates business matching, PoC opportunities, and cross-border innovation.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Program</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Keynotes by Unicorn CEOs and Investors</li>
          <li>Startup × Corporate PoC Matching</li>
          <li>VC Roundtable Sessions</li>
          <li>Global Startup Showcases</li>
        </ul>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">How to Join</h2>
        <p>
          Participation is by invitation only. If your startup or organization is interested in joining the summit, please contact us through the form below.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Contact</h2>
        <p>Email: <a href="mailto:info@tokyounicornsummit.org" className="text-blue-600">info@tokyounicornsummit.org</a></p>
        <p>Organizer: 一般社団法人 東京ユニコーンサミット運営機構</p>
        <p>Location: Minato-ku, Tokyo (Virtual Office)</p>
      </section>

      <footer className="text-center text-sm text-gray-500">
        &copy; 2025 Tokyo Unicorn Summit Organization. All rights reserved.
      </footer>
    </main>
  );
}
