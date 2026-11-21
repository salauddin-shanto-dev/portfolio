import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/env";
import { profile } from "@/content/profile";

export const dynamic = "force-static";
export const alt = `${profile.name} — ${profile.title}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#0c0d0e",
          color: "#e7e9e8",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 96,
            height: 96,
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid #343a3f",
            borderRadius: 12,
            fontSize: 40,
            fontWeight: 700,
          }}
        >
          <span>{profile.initials.slice(0, 1)}</span>
          <span style={{ color: "#4fb28a" }}>{profile.initials.slice(1)}</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 72, fontWeight: 700, letterSpacing: -2 }}>{profile.name}</div>
          <div style={{ fontSize: 36, color: "#9aa29f" }}>{profile.title}</div>
          <div style={{ fontSize: 26, color: "#4fb28a" }}>{profile.positioning.join("  ·  ")}</div>
        </div>
        <div style={{ fontSize: 22, color: "#9aa29f" }}>{siteConfig.siteUrl.replace("https://", "")}</div>
      </div>
    ),
    size,
  );
}
