import { MdVerifiedUser } from "react-icons/md";

import type { UserMock } from "@/core";
import { Button, Container, Paper, Typography } from "@/shared";

interface SettingsFormProps {
	user?: UserMock;
	open: boolean;
	setOpen: (open: boolean) => void;
}

export const SettingsForm = ({ user, open, setOpen }: SettingsFormProps) => {
	return (
		<Container className="space-y-12 py-8">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
				<Paper>
					<div className="flex items-center justify-between">
						<Typography
							variant="h2"
							className="mb-6 border-b border-blue-400 pb-2"
						>
							Account
						</Typography>
						{user?.isVerified && (
							<MdVerifiedUser className="text-green-500" size={20} />
						)}
					</div>
					<div className="space-y-4">
						<img
							src={`https://avatars.dicebear.com/api/avataaars/${user?.email}.svg`}
							alt="avatar"
							className="rounded-full w-20 h-20 shadow-lg"
						/>
						<div>
							<Typography variant="body2" className="text-gray-400">
								Username
							</Typography>
							<Typography variant="body1">
								{user?.firstName} {user?.lastName}
							</Typography>
							<Typography variant="body2" className="text-gray-400">
								Phone
							</Typography>
							<Typography variant="body1">{user?.phone}</Typography>
							<Typography variant="body2" className="text-gray-400">
								Email
							</Typography>
							<Typography variant="body1">{user?.email}</Typography>
						</div>
						<Button variant="bordered" fullWidth>
							Edit
						</Button>
					</div>
				</Paper>

				<Paper>
					<Typography
						variant="h2"
						className="mb-6 border-b border-blue-400 pb-2"
					>
						Personal Data
					</Typography>
					<div className="space-y-4">
						<div>
							<Typography variant="body2" className="text-gray-400">
								Employment Type
							</Typography>
							<Typography variant="body1">{user?.employmentType}</Typography>
						</div>
						<div>
							<Typography variant="body2" className="text-gray-400">
								Experience
							</Typography>
							<Typography variant="body1">{user?.experience}</Typography>
						</div>
						<div>
							<Typography variant="body2" className="text-gray-400">
								Monthly Income
							</Typography>
							<Typography variant="body1">{user?.monthlyIncome}</Typography>
						</div>
					</div>
					<Button variant="bordered" fullWidth>
						Edit
					</Button>
				</Paper>

				<Paper>
					<Typography
						variant="h2"
						className="mb-6 border-b border-blue-400 pb-2"
					>
						Documents
					</Typography>
					<Button variant="bordered" fullWidth onClick={() => setOpen(!open)}>
						Show documents
					</Button>
					{open && (
						<div className="space-y-4 mt-4">
							<div>
								<Typography variant="body2">Full Name</Typography>
								<Typography variant="body1">
									{user?.firstName} {user?.lastName}
								</Typography>
							</div>
							<div>
								<Typography variant="body2">ID Card</Typography>
								<Typography variant="body1">{user?.idCard}</Typography>
							</div>
							<div>
								<Typography variant="body2">ID Record</Typography>
								<Typography variant="body1">{user?.idRecord}</Typography>
							</div>
							<div>
								<Typography variant="body2">Valid Until</Typography>
								<Typography variant="body1">{user?.validUntil}</Typography>
							</div>
							<div>
								<Typography variant="body2">Issue Date</Typography>
								<Typography variant="body1">{user?.issueDate}</Typography>
							</div>
							<div>
								<Typography variant="body2">Issuing Authority</Typography>
								<Typography variant="body1">
									{user?.issuingAuthority}
								</Typography>
							</div>
							<div>
								<Typography variant="body2">Tax Number</Typography>
								<Typography variant="body1">{user?.taxNumber}</Typography>
							</div>
							<div>
								<Typography variant="body2">Registration</Typography>
								<Typography variant="body1">{user?.registration}</Typography>
							</div>
							<div>
								<Typography variant="body2">Birth Date</Typography>
								<Typography variant="body1">{user?.birthDate}</Typography>
							</div>
						</div>
					)}
				</Paper>
			</div>
		</Container>
	);
};
