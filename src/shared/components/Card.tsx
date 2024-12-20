import React from "react";
import type { IconType } from "react-icons";

import { Paper, Typography } from "@/shared";

interface FeatureProps {
	icon: IconType;
	title: string;
	description: string;
}

interface FeatureCardProps {
	features: FeatureProps[];
	headingText?: string;
	headingColor?: "primary" | "secondary" | "blue" | "warning" | "cyan";
}

const Feature = ({ icon: Icon, title, description }: FeatureProps) => (
	<Paper color="secondary">
		{Icon && <Icon size={24} className="text-blue-500 mx-auto m-2" />}
		<Typography variant="h6" center color="secondary">
			{title}
		</Typography>
		<Typography center variant="body2">
			{description}
		</Typography>
	</Paper>
);

export const Card = ({
	features,
	headingText = "Our Features",
	headingColor = "secondary",
}: FeatureCardProps) => {
	return (
		<>
			<Typography variant="h3" center color={headingColor}>
				{headingText}
			</Typography>
			<div className="grid grid-cols-1 py-12 sm:grid-cols-2 lg:grid-cols-4 gap-8">
				{features?.map((feature) => (
					<Feature key={feature.title} {...feature} />
				))}
			</div>
		</>
	);
};
