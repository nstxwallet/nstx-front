"use client";

import { handleCopy, logout, useAuth } from "@/core";
import {
	Button,
	DropdownDesktop,
	DropdownMobile,
	NstxLogo,
	Typography,
} from "@/shared";
import { useRouter } from "next/navigation";
import type React from "react";
import { useState } from "react";
import { BiLineChart, BiShareAlt, BiTransfer, BiWallet } from "react-icons/bi";
import {
	MdLogout,
	MdNotifications,
	MdOutlineSupportAgent,
	MdPerson,
	MdSecurity,
} from "react-icons/md";

export const Header = () => {
	const router = useRouter();
	const { user } = useAuth();

	const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
	const [isActionsDropdownOpen, setIsActionsDropdownOpen] = useState(false);

	const walletActions = [
		{
			icon: <BiWallet />,
			label: "Transfer",
			onClick: () => router.push("/transactions/create/nstx"),
		},
		{
			icon: <BiTransfer />,
			label: "Payments & Transfers",
			onClick: () => router.push("/transactions/create"),
		},

		{
			icon: <BiLineChart />,
			label: "Create Balance",
			onClick: () => router.push("/wallet/create"),
		},
	];

	const profileActions = [
		{
			icon: <MdPerson />,
			label: "Profile",
			onClick: () => router.push("/profile"),
		},
		{
			icon: <MdSecurity />,
			label: "Security",
			onClick: () => router.push("/security"),
		},
		{
			icon: <MdNotifications />,
			label: "Notifications",
			onClick: () => router.push("/notifications"),
		},
		{
			icon: <BiShareAlt />,
			label: "Referrals",
			onClick: () => router.push("/referrals"),
		},
		{
			icon: <MdOutlineSupportAgent />,
			label: "Support",
			onClick: () => router.push("/support"),
		},
		{
			icon: <MdLogout />,
			label: "Logout",
			onClick: () => {
				logout().then(() => router.push("/"));
			},
		},
	];

	return (
		<>
			<Button
				variant="secondary"
				fullWidth
				className="rounded-none justify-center text-xs bg-zinc-800 border-none"
				onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
					handleCopy(e, user?.id)
				}
			>
				{user?.id || "No ID Available"}
			</Button>
			{user ? (
				<header className="flex mt-1 p-2 items-center justify-between w-full">
					<div className="hidden lg:flex space-x-2">
						<Button
							variant="transparent"
							onClick={() => router.push("/wallet/create")}
						>
							Create Balance
						</Button>
						<Button
							variant="transparent"
							onClick={() => router.push("/wallet")}
						>
							Transactions
						</Button>
					</div>
					<div
						className="relative hidden lg:block ml-auto"
						onMouseEnter={() => setIsProfileDropdownOpen(true)}
						onMouseLeave={() => setIsProfileDropdownOpen(false)}
					>
						<DropdownDesktop
							isOpen={isProfileDropdownOpen}
							options={profileActions}
							buttonIcon={<MdPerson className="text-black" />}
						/>
					</div>

					<div
						className="relative hidden lg:block ml-4"
						onMouseEnter={() => setIsActionsDropdownOpen(true)}
						onMouseLeave={() => setIsActionsDropdownOpen(false)}
					>
						<DropdownDesktop
							isOpen={isActionsDropdownOpen}
							options={walletActions}
							buttonIcon={<BiWallet className="text-black" />}
						/>
					</div>
					<div className="flex ml-2 lg:hidden">
						<DropdownMobile
							buttonIcon={<MdPerson />}
							options={profileActions}
						/>
					</div>

					<div className="flex ml-2 lg:hidden">
						<DropdownMobile buttonIcon={<BiWallet />} options={walletActions} />
					</div>

					<div className="hidden lg:flex ml-4">
						<NstxLogo />
					</div>
				</header>
			) : (
				<Typography variant="h6" strong>
					Not logged in
				</Typography>
			)}
		</>
	);
};
