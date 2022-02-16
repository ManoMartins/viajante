import Head from "next/head";
import Image from "next/image";
import { Button } from "../components/Atoms/Button";

export default function Home() {
  return <Button label="Teste" onClick={() => alert("teste")} />;
}
