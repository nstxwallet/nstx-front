"use client";

import { ToastContainer } from "react-toastify";

export const ToastProvider = () => {
	return (
		<ToastContainer
			stacked={true}
			theme="dark"
			limit={3}
			position="top-center"
			autoClose={3000}
			newestOnTop={true}
			closeOnClick
		/>
	);
};
