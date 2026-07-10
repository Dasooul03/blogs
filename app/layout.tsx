import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dai's Field Notes｜Agent 开发学习笔记",
  description: "记录 Agent 开发中的学习、实验与思考。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
