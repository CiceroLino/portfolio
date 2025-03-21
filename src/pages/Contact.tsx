import React from "react";

export default function Contact() {
  return (
    <div className="container mx-auto max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Contact</h1>
      <div className="card p-6">
        <p className="mb-4">
          Feel free to reach out to me through any of these channels:
        </p>
        <div className="space-y-2">
          <a
            href="mailto:your.email@example.com"
            className="menu-item inline-flex"
          >
            Email
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="menu-item inline-flex"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="menu-item inline-flex"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
