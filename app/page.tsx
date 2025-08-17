"use client";

import TargetCursor from "@/components/TargetCursor";
import Content from "@/components/Content";

import { JetBrains_Mono } from 'next/font/google'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-jetbrains-mono'
});

export default function Home() {
  return (
    <div className={`flex flex-col items-center justify-center min-h-screen ${jetbrainsMono.className}`}>
      <TargetCursor spinDuration={2} hideDefaultCursor={true} />
      <Content/>
    </div>
  );
}
