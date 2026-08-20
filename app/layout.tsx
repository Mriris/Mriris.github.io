import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "燕庭轩 · 具身智能体的可验证任务执行",
  description: "燕庭轩，西北工业大学人工智能工程硕士。研究具身智能体的可验证任务执行、大模型任务规划、可验证奖励强化学习与多模态遥感理解。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
