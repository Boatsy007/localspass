import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'LocalPass — More Gold Coast, less spend', description: 'Explore the Gold Coast and save with LocalPass. Tourist passes $9 for 7 days. Locals passes $49 for a year.' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en-AU"><body>{children}</body></html>; }
