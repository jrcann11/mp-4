"use client";
import React from "react";
import Header from "@/app/components/Header";

export default function RootLayout(
    {children,}:
    Readonly<{children: React.ReactNode}>
){
  return(
      <html lang = "en">
      <body>
      <Header></Header>
      {children}
      </body>
      </html>
  );
}
