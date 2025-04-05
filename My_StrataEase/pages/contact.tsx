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

export default function Contact() {
  return (
    <main>
      <h1>Contact the Strata Committee</h1>
      <p>Have questions or concerns? Get in touch with us.</p>

      <form action="/api/contact" method="POST">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>

      <h2>📞 Contact Information:</h2>
      <ul className="contact-info">
        <li><strong>Email:</strong> strata@buildingmanagement.com</li>
        <li><strong>Phone:</strong> +61 2 1234 5678</li>
        <li><strong>Office Hours:</strong> Mon-Fri, 9 AM - 5 PM</li>
      </ul>
    </main>
  );
}
