"use client";
import React from "react";
import Image from "next/image";
import { changeToggleMenu } from "@/redux/recipeSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  const toggleMenu = useSelector((state) => state.recipe.value.toggleMenu);
  const dispatch = useDispatch();
  const router = useRouter();

  return (
    <nav className="flex items-center justify-between py-3 bg-black opacity-90 md:px-[4rem] w-full fixed z-10">
      <div className="flex items-center hover:cursor-pointer">
        <Image src="/logo.png" alt="logo" width={56} height={56} />
        <div>
          <span className="text-lg text-white">Flavor</span>
          <span className="text-green-600 text-xl">Verse</span>
        </div>
      </div>
      <div className="hidden md:block hover:cursor-pointer">
        <ul className="flex text-white transition delay-1000">
          <li className="mx-3 hover:text-green-600">
            <Link href="/">Home</Link>
          </li>
          <li className="mx-3 hover:text-green-600">
            <Link href="#explore">Explore</Link>
          </li>

          <li className="mx-3 hover:text-green-600">
            <Link href="/favourites">Favourites</Link>
          </li>
        </ul>
      </div>
      <SignedIn>
        <div className="flex items-center">
          <h1 className="text-white pr-3">Profile</h1>
          <UserButton afterSignOutUrl="/" />
        </div>
      </SignedIn>
      <SignedOut>
        <SignInButton mode="modal">
          <button className="border rounded-full px-9 py-2 group-hover:bg-white">
            <h1 className="text-white group-hover:text-black">Sign in</h1>
          </button>
        </SignInButton>
      </SignedOut>
      <div className="md:hidden pr-5 transition">
        {toggleMenu ? (
          <Image
            src="/close.svg"
            width={20}
            height={20}
            alt="menu"
            onClick={() => dispatch(changeToggleMenu(false))}
          />
        ) : (
          <Image
            src="/menu.svg"
            width={20}
            height={20}
            alt="menu"
            onClick={() => dispatch(changeToggleMenu(true))}
          />
        )}
      </div>
      {toggleMenu && (
        <div className="block md:hidden absolute top-[5rem] bg-black w-full py-10 transition ease-in-out">
          <ul className="flex flex-col text-white transition">
            <li className="mx-5 my-2 hover:text-green-600">
              <Link href="/">Home</Link>
            </li>
            <li className="mx-5 my-2 hover:text-green-600">
              <Link href="#explore">Explore</Link>
            </li>
            <li className="mx-5 mt-2 hover:text-green-600">
              <Link href="/favourites">Favourites</Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
