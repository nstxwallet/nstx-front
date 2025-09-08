"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { MdLogout, MdOutlineSupportAgent, MdSettings, MdMenu } from "react-icons/md";
import { BiUser, BiWallet } from "react-icons/bi";
import { AiOutlineTransaction } from "react-icons/ai";
import { Separator } from "radix-ui";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";

import { useAuth, useToast } from "@/core";
import { Button, Dropdown, Switch } from "@/shared";
import { NstxLogo } from "@/public";

export const Header = () => {
  const router = useRouter();
  const { logout } = useAuth();
  const { toast } = useToast();

  const handleLogout = () => {
    logout().subscribe({
      next: () => {
        toast({
          title: "Logout success",
          description: "You have been logged out successfully",
        });
        router.push("/");
      },
      error: (error) => {
        toast({
          title: "Logout failed",
          description: error,
        });
      },
    });
  };

  const options = [
    { label: "Transactions", onClick: () => router.push("/transactions"), icon: <BiWallet /> },
    {
      label: "NSTX",
      onClick: () => router.push("/transactions/fund/nstx"),
      icon: <ArrowTopRightIcon className="w-5 h-5 text-green" />,
    },
    {
      children: <Separator.Root className="SeparatorRoot" style={{ margin: "15px 0" }} />,
    },
    { label: "Profile", onClick: () => router.push("/profile"), icon: <BiUser /> },
    { label: "Settings", onClick: () => router.push("/settings"), icon: <MdSettings /> },
    { label: "Support", onClick: () => router.push("/support"), icon: <MdOutlineSupportAgent /> },
    { label: "Logout", onClick: handleLogout, icon: <MdLogout /> },
  ];

  return (
    <header
      className={`flex items-center justify-between w-full px-5 lg:px-8 mt-9 mb-4 transition-all dark :bg-zinc-900 dark:text-white light:bg-white light: text-black"}`}
    >
      <nav className="flex items-center space-x-4">
        <Button variant="transparent" onClick={() => router.push("/")}>
          <NstxLogo />
        </Button>
        <Switch />
      </nav>  
      <nav className="hidden lg:flex items-center space-x-4">
        <Button
          onClick={() => router.push("/transactions")}
          icon={<AiOutlineTransaction />}
          variant="transparent"
        />
        <Button
          onClick={() => router.push("/transactions/fund/nstx")}
          icon={<ArrowTopRightIcon />}
          variant="transparent"
        />
        <Button
          onClick={() => router.push("/settings")}
          icon={<MdSettings />}
          variant="transparent"
        />
        <Dropdown options={options} iconDropdown={<BiUser />} />
      </nav>

      <nav className="lg:hidden flex items-center space-x-4">
        <Dropdown options={options} iconDropdown={<MdMenu className="text-2xl" />} />
      </nav>
    </header>
  );
};
