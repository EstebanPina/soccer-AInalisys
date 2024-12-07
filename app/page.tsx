import Image from "next/image";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript,SiPython,SiFastapi,SiSqlalchemy,SiAmazonwebservices } from "react-icons/si";
import { BsFillShieldLockFill } from "react-icons/bs";
import { BiLogoPostgresql } from "react-icons/bi";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col w-full items-center justify-center h-[80vh]">
      <main className="flex flex-col w-3/4 items-center justify-center bg-gradient-to-t from-white/5 to-white/10 rounded-3xl p-16">
        <h1 className="text-5xl items-center font-bold flex justify-center w-3/4">WELCOME TO <Image src="/logo.png" width={250} height={100} alt="Logo" /></h1>
        <p className="mt-4 text-xl w-3/4 flex justify-center leading-10">
          A simple app to get predictions for Brazilian and Spanish leagues of Soccer.<br/>
          The app is built with Next.js, Tailwind CSS, TypeScript, and NextAuth.js.<br/>
          All the backend is handled in API based on Python Fastapi and SQLAlchemy ORM.<br/>
          The Database is PostgreSQL hosted on AWS RDS.<br/>
        </p>
        <div className="flex mt-16 flex-col">
        <p className="py-2 text-lg">Stack</p>
        <div className="flex gap-4">
          <Link href={'https://nextjs.org/docs'}><RiNextjsFill className="text-3xl hover:scale-150 duration-150 text-cool_gray hover:text-blue-500" /></Link>
          <Link href={'https://tailwindcss.com/docs'}><RiTailwindCssFill className="text-3xl hover:scale-150 duration-150 text-cool_gray hover:text-blue-500" /></Link>
          <Link href={'https://www.typescriptlang.org/docs/'}><SiTypescript className="text-3xl hover:scale-150 duration-150 text-cool_gray hover:text-blue-500" /></Link>
          <Link href={'https://next-auth.js.org/getting-started/introduction'}><BsFillShieldLockFill className="text-3xl hover:scale-150 duration-150 text-cool_gray hover:text-blue-500" /></Link>
          <Link href={'https://docs.python.org/3/'}><SiPython className="text-3xl hover:scale-150 duration-150 text-cool_gray hover:text-blue-500" /></Link>
          <Link href={'https://fastapi.tiangolo.com/'}><SiFastapi className="text-3xl hover:scale-150 duration-150 text-cool_gray hover:text-blue-500" /></Link>
          <Link href={'https://docs.sqlalchemy.org/en/20/'}><SiSqlalchemy className="text-3xl hover:scale-150 duration-150 text-cool_gray hover:text-blue-500" /></Link>
          <Link href={'https://docs.aws.amazon.com/rds/?nc2=h_ql_doc_rds'}><SiAmazonwebservices className="text-3xl hover:scale-150 duration-150 text-cool_gray hover:text-blue-500" /></Link>
          <Link href={'https://www.postgresql.org/docs/'}><BiLogoPostgresql className="text-3xl hover:scale-150 duration-150 text-cool_gray hover:text-blue-500" /></Link>
        </div>
        </div>
      </main>
      <footer className="flex gap-4 mt-4">
        <p className="text-xs">Created by <Link href="https://www.linkedin.com/in/esteban-pi%C3%B1a-454a05194/" className="hover:text-lapis_lazuli duration-150">Esteban Piña</Link></p>
      </footer>
    </div>
  );
}
