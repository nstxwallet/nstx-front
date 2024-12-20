"use client";

import { SettingsForm } from "@/feautures";
import { useState } from "react";

const user = {
	firstName: "Kiborg",
	lastName: "Ybivtsya",
	email: "kiborg@gmail.com",
	phone: "+380997484505",
	balances: [
		{
			id: "1",
			userId: "1",
			value: 1000,
			currency: "USD",
		},
		{
			id: "2",
			userId: "1",
			value: 2000,
			currency: "EUR",
		},
	],
	employmentType: "Службовець/Працівник по найму",
	experience: "8 років",
	monthlyIncome: "12,000.00 ₴",
	idCard: "85482051",
	idRecord: "85482051519-31281",
	validUntil: "28.10.2028",
	issueDate: "28.10.1996",
	issuingAuthority: "4174",
	taxNumber: "417593921",
	registration: "Київ соборний 245",
	birthDate: "03.06.1981",
	isVerified: true,
};

export default function Settings() {
	const [open, setOpen] = useState(false);
	return <SettingsForm user={user} open={open} setOpen={setOpen} />;
}
