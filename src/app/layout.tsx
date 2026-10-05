import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";

const display = Space_Grotesk({ subsets: ["latin"], variable: "--font-display", weight: ["400", "500", "600", "700"] });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"] });

export const metadata: Metadata = {
  title: "Utkarsh Tripathi — Machine Learning Engineer",
  description:
    "Portfolio of Utkarsh Tripathi, Machine Learning Engineer in Bengaluru building production ML pipelines, forecasting systems, LLM assistants and scalable backends with Python, FastAPI, Django, and PostgreSQL.",
  keywords: ["Utkarsh Tripathi", "Machine Learning Engineer", "MLOps", "XGBoost", "MLflow", "FastAPI", "Django", "PostgreSQL", "LLM", "Portfolio"],
  authors: [{ name: "Utkarsh Tripathi", url: "https://github.com/Tripathiraj1" }],
  openGraph: {
    title: "Utkarsh Tripathi — Machine Learning Engineer",
    description: "Production ML, forecasting, LLM apps and scalable backends. Follow the journey.",
    type: "website",
  },
};

export const viewport: Viewport = { themeColor: "#06060b" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
