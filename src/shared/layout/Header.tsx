"use client";

import { useAuth, useToast } from "@/core";
import { Button, Dropdown, NstxLogo, Switch } from "@/shared";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import React from "react";
import { AiOutlineTransaction } from "react-icons/ai";
import { BiUser, BiWallet } from "react-icons/bi";
import { MdLogout, MdOutlineSupportAgent, MdSettings } from "react-icons/md";

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
    {
      label: "Transactions",
      onClick: () => router.push("/transactions"),
      icon: <BiWallet />,
    },
    {
      label: "NSTX",
      onClick: () => router.push("/transactions/fund/nstx"),
      icon: <ArrowTopRightIcon className="w-5 h-5 text-green" />,
    },
    {
      label: "Settings",
      onClick: () => router.push("/settings"),
      icon: <MdSettings />,
    },
    { label: "Logout", onClick: handleLogout, icon: <MdLogout /> },
    { label: "Terms", onClick: () => router.push("/terms") },
    {
      label: "Support",
      onClick: () => router.push("/support"),
      icon: <MdOutlineSupportAgent />,
    },
  ];

  return (
    <header className="flex items-center justify-between w-full bg-zinc-900 mt-8 mb-4 px-4 lg:px-8">
      <nav className="hidden lg:flex items-center space-x-4">
        <Button variant="transparent" onClick={() => router.push("/")}>
          <NstxLogo />
        </Button>
        <Switch />
        <Button
          onClick={() => router.push("/transactions")}
          icon={<AiOutlineTransaction className="text-white" />}
          variant="transparent"
        />
        <Button
          onClick={() => router.push("/transactions/fund/nstx")}
          icon={<ArrowTopRightIcon className="text-white" />}
          variant="transparent"
        />
        <Button
          onClick={() => router.push("/settings")}
          icon={<MdSettings className="text-white" />}
          variant="transparent"
        />
      </nav>

      <nav className="flex items-center space-x-4">
        <Button
          variant="secondary"
          onClick={() => router.push("/transactions/new-wallet")}
          size="sm"
        >
          New balance
        </Button>
        <Button
          onClick={() => router.push("/support")}
          size="sm"
          icon={<MdOutlineSupportAgent className="text-white" />}
          variant="transparent"
        />
        <Dropdown options={options} iconDropdown={<BiUser className="text-white" />} />
      </nav>
    </header>
  );
};
