import Navbar from "@/components/navbar/navbar";
export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="h-6 bg-slate-200 text-center">Discount</div>
      <div>
        <section className="bg-slate-300 flex flex-col justify-between items-center w-full m-auto md:px-10 h-screen">
          <Navbar />
          <div className="flex flex-col items-center justify-center absolute md:bottom-1/2 top-1/2">
            <h1 className="text-7xl font-black">
              E-buy<span className="text-textcolor"> Sport Project</span>
            </h1>

            <p className="w-2/3 p-2 text-center tracking-wide">
              Introducing our latest collection designed speciically or outdoor enthusiasts. Features a high range of high-perfomance outwear wih a range of bold and vibrant colors and paterns to choose from
            </p>
            <button className="bg-yellow-500 py-4 px-12 rounded-3xl border-2 hover:bg-transparent hover:border-2">Shop Now</button>
          </div>
        </section>
      </div>
    </main>
  );
}
