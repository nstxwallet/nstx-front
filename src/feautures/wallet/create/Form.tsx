"use client";

import {
	Button,
	Container,
	Form,
	Paper,
	Row,
	Select,
	Typography,
} from "@/shared";
import type { FormikProps } from "formik";
import { useRouter } from "next/navigation";
import type React from "react";
import { toast } from "react-toastify";

interface CreateWalletFormProps {
	formik: FormikProps<{ currency: string; terms: boolean }>;
	currencyOptions: string[];
	handleCancel: () => void;
	onSuccess?: () => void;
	onError?: (error: string) => void;
}

export const CreateWalletForm = ({
	formik,
	currencyOptions,
	handleCancel,
	onSuccess,
	onError,
}: CreateWalletFormProps) => {
	const router = useRouter();

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		try {
			await formik.submitForm();
			if (formik.isValid && onSuccess) {
				onSuccess();
				router.push("/wallet/success");
			}
		} catch (_e) {
			if (onError) {
				toast.error("Failed to create balance");
			}
		}
	};

	return (
		<Container className="flex justify-center">
			<Paper className="max-w-lg w-full">
				<Typography center variant="h4">
					Create New Balance
				</Typography>
				<Typography center variant="body1">
					Select a currency to create a new balance in your account. This
					balance will allow you to manage and track your funds with ease.
				</Typography>

				<Form onSubmit={handleSubmit}>
					<div className="mb-4">
						<Select
							name="currency"
							id="currency"
							onChange={formik.handleChange}
							value={formik.values.currency}
							placeholder="Choose currency"
						>
							<option value="" disabled />
							{currencyOptions.map((currency) => (
								<option key={currency} value={currency}>
									{currency}
								</option>
							))}
						</Select>
						{formik.errors.currency && (
							<p className="text-red-500 text-sm mt-1">
								{formik.errors.currency}
							</p>
						)}
					</div>

					<Row justify="start" className="mb-6">
						<input
							type="checkbox"
							name="terms"
							id="terms"
							onChange={formik.handleChange}
							className="mr-2"
						/>
						<label htmlFor="terms" className="text-gray-600">
							I agree to the terms and conditions
						</label>
					</Row>
					{formik.errors.terms && (
						<p className="text-red-500 text-sm mt-1">{formik.errors.terms}</p>
					)}

					<Button variant="primary" type="submit">
						{formik.values.currency
							? `Create ${formik.values.currency} Balance`
							: "Create Balance"}
					</Button>

					<Button variant="bordered" onClick={handleCancel}>
						Cancel
					</Button>
				</Form>
			</Paper>
		</Container>
	);
};
