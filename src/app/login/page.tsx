"use client";

import Image from "next/image";
import { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import type { NextPage } from "next";

const LoginPage: NextPage = () => {
  const router = useRouter();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ username, password });
    router.push("/dashboard");
  };

  return (
    <div className="bg-white flex h-screen">
      {/* Left - Collage Image */}
      <div className="relative w-1/2 overflow-hidden flex items-center justify-center">
        <Image
          src="/images/cover.png"
          alt="Makassar Collage"
          width={600}
          height={600}
          className="object-contain"
        />
      </div>

      {/* Right - Login Form */}
      <div className="flex items-center justify-center w-1/2">
        <div className="bg-white p-8 rounded-2xl shadow-xl/20 w-[400px] h-[400px]">
          <h1 className="text-2xl font-semibold text-red-800 text-center mb-6">
            Platform Upload Data
            <br />
            Kota Makassar
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Username Field */}
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                value={username}
                onChange={handleUsernameChange}
                className="w-full h-12 border border-black rounded-2xl px-4 focus:outline-none focus:ring-2"
                required
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                className="w-full  h-[50px] border border-black rounded-2xl px-4 pr-10 focus:outline-none focus:ring-2 "
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 focus:outline-none"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? (
                  <EyeSlashIcon className="h-5 w-5 text-gray-500" />
                ) : (
                  <EyeIcon className="h-5 w-5 text-gray-500" />
                )}
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full h-12 bg-red-800 text-white rounded-2xl font-semibold hover:bg-red-700 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
