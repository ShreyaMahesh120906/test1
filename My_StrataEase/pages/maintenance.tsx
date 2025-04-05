import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Maintenance() {
  return (
    <main>
      <h1>Maintenance Requests</h1>
      <p>Report and track maintenance issues for your building.</p>

      <h2>🔧 Submit a Request</h2>
      <form action="/api/maintenance" method="POST">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="text" name="unit" placeholder="Apartment/Unit Number" required />
        <textarea name="issue" placeholder="Describe the issue" required></textarea>
        <button type="submit">Submit Request</button>
      </form>

      <h2>📋 Ongoing Maintenance Requests</h2>
      <ul className="maintenance-list">
        <li>
          <strong>🚰 Leaking Pipe - Apartment 12B</strong>
          <p>Status: <span className="status in-progress">In Progress 🔄</span></p>
          <p>Reported on: March 28, 2025</p>
        </li>
        <li>
          <strong>💡 Light Out in Hallway - Level 3</strong>
          <p>Status: <span className="status completed">Completed ✅</span></p>
          <p>Resolved on: March 25, 2025</p>
        </li>
        <li>
          <strong>🛠 Broken Door Lock - Gym Entrance</strong>
          <p>Status: <span className="status pending">Pending ⏳</span></p>
          <p>Reported on: April 1, 2025</p>
        </li>
      </ul>
    </main>
  );
}
