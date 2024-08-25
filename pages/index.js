import Layout from "@/components/Layout";
import Image from "next/image";
import { MdOutlineChevronRight, MdOutlineChevronLeft } from "react-icons/md";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Hackclub | Home</title>
        <meta name="description" content="Redesign of website landing page." />
      </Head>
        <div className="flex flex-col w-screen h-screen">
          <div className="flex flex-col w-full h-full bg-gradientbg bg-right-top brightness-110 bg-cover items-center justify-between">
            <div className="flex flex-col items-center justify-center mt-[30vh]">
              <div className="text-[9px] uppercase mb-5">Discover the joy of code, together.</div>
              <Image
                src='/title.png'
                height={150}
                width={150}
                className="w-[250px] md:w-[400px] mb-12"
              />
              <div className="flex flex-row button1 mb-12">About us</div>
            </div>
            <div className="flex flex-row overflow-hidden w-[90vw] space-x-16 mb-20">
              <div className="flex flex-row space-x-16 animate-loop-scroll">
                <div>Clubs</div>
                <div className="flex flex-row">
                  <MdOutlineChevronLeft size={10} />
                  <MdOutlineChevronRight size={10} />
                </div>
                <div>Sponsorship</div>
                <div className="flex flex-row">
                  <MdOutlineChevronLeft size={10} />
                  <MdOutlineChevronRight size={10} />
                </div>
                <div>Hackathons</div>
                <div className="flex flex-row">
                  <MdOutlineChevronLeft size={10} />
                  <MdOutlineChevronRight size={10} />
                </div>
                <div>Community</div>
                <div className="flex flex-row">
                  <MdOutlineChevronLeft size={10} />
                  <MdOutlineChevronRight size={10} />
                </div>
                <div>Scrapbook</div>
                <div className="flex flex-row">
                  <MdOutlineChevronLeft size={10} />
                  <MdOutlineChevronRight size={10} />
                </div>
                <div>OnBoard</div>
                <div className="flex flex-row">
                  <MdOutlineChevronLeft size={10} />
                  <MdOutlineChevronRight size={10} />
                </div>
                <div>Projects</div>
                <div className="flex flex-row">
                  <MdOutlineChevronLeft size={10} />
                  <MdOutlineChevronRight size={10} />
                </div>
                <div>OpenSource</div>
                <div className="flex flex-row">
                  <MdOutlineChevronLeft size={10} />
                  <MdOutlineChevronRight size={10} />
                </div>
                <div>Workshops</div>
                <div className="flex flex-row">
                  <MdOutlineChevronLeft size={10} />
                  <MdOutlineChevronRight size={10} />
                </div>
                <div>Fundraising</div>
                <div className="flex flex-row">
                  <MdOutlineChevronLeft size={10} />
                  <MdOutlineChevronRight size={10} />
                </div>
              </div>
              <div className="flex flex-row space-x-16 animate-loop-scroll" aria-hidden="true">
                <div>Clubs</div>
                <div className="flex flex-row">
                  <MdOutlineChevronLeft size={10} />
                  <MdOutlineChevronRight size={10} />
                </div>
                <div>Sponsorship</div>
                <div className="flex flex-row">
                  <MdOutlineChevronLeft size={10} />
                  <MdOutlineChevronRight size={10} />
                </div>
                <div>Hackathons</div>
                <div className="flex flex-row">
                  <MdOutlineChevronLeft size={10} />
                  <MdOutlineChevronRight size={10} />
                </div>
                <div>Community</div>
                <div className="flex flex-row">
                  <MdOutlineChevronLeft size={10} />
                  <MdOutlineChevronRight size={10} />
                </div>
                <div>Scrapbook</div>
                <div className="flex flex-row">
                  <MdOutlineChevronLeft size={10} />
                  <MdOutlineChevronRight size={10} />
                </div>
                <div>OnBoard</div>
                <div className="flex flex-row">
                  <MdOutlineChevronLeft size={10} />
                  <MdOutlineChevronRight size={10} />
                </div>
                <div>Projects</div>
                <div className="flex flex-row">
                  <MdOutlineChevronLeft size={10} />
                  <MdOutlineChevronRight size={10} />
                </div>
                <div>OpenSource</div>
                <div className="flex flex-row">
                  <MdOutlineChevronLeft size={10} />
                  <MdOutlineChevronRight size={10} />
                </div>
                <div>Workshops</div>
                <div className="flex flex-row">
                  <MdOutlineChevronLeft size={10} />
                  <MdOutlineChevronRight size={10} />
                </div>
                <div>Fundraising</div>
                <div className="flex flex-row">
                  <MdOutlineChevronLeft size={10} />
                  <MdOutlineChevronRight size={10} />
                </div>
              </div>
            </div>
          </div>
        </div>
    </Layout>
  );
}


