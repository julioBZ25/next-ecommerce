import Link from "next/link";
import logo from "../assets/logo.png";
import Image from "next/image";
import { redirect } from "next/navigation";

async function searchProduct(formData: FormData) {
  "use server";

  const searchQuery = formData.get("searchQuery")?.toString();

  if (searchQuery) redirect("/search?query=" + searchQuery);
}

const Navbar = () => {
  return (
    <div className="bg-base-100">
      <div className="navbar m-auto max-w-7xl flex-col gap-2 sm:flex-row">
        <div className="flex-1">
          <Link
            href="/"
            className="btn-ghost btn rounded-lg bg-blue-900 p-2 text-xl normal-case"
          >
            <Image src={logo} height={100} width={100} alt="Hyuse logo" />
          </Link>
        </div>
        <div className="flex-none gap-2">
          <form action="">
            <div className="form-control">
              <input
                name="searchQuery"
                placeholder="Search"
                type="text"
                className="input-bordered input w-full min-w-[100px]"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
