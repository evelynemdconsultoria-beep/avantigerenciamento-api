"use client";

import Image from "next/image";

export default function Login() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f4f4f4",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          width: "350px",
          textAlign: "center",
        }}
      >
        {/* Logo maior */}
        <Image
          src="/logo.svg"   // precisa estar em public/logo.svg
          alt="Logo Avanti GR"
          width={220}
          height={220}
          style={{ margin: "0 auto 20px" }}
          priority
        />

        {/* Título menor */}
        <h2 style={{ marginBottom: "1.5rem", fontSize: "20px", fontWeight: "600" }}>
          Login
        </h2>

        {/* Campo Usuário */}
        <input
          type="text"
          placeholder="Usuário"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "12px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "14px",
          }}
        />

        {/* Campo Senha */}
        <input
          type="password"
          placeholder="Senha"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
            border: "1px solid #ccc",
            borderRadius: "5px",
            fontSize: "14px",
          }}
        />

        {/* Botão Entrar em verde-limão */}
        <button
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#a3d43f", // verde-limão Avanti
            color: "#222",              // texto em cinza escuro para contraste
            border: "none",
            borderRadius: "5px",
            fontSize: "14px",
            fontWeight: "600",
            cursor: "pointer",
          }}
        >
          Entrar
        </button>
      </div>
    </main>
  );
}
