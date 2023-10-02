import { Watch } from "react-loader-spinner";

interface ErrorTryingAgainMessageProps {
	children?: string;
}

const ErrorTryingAgainMessage = (props: ErrorTryingAgainMessageProps) => {
	return (
		<div className="mx-auto flex justify-center items-center">
			<p className="text-center my-20 text-lg text-red mr-2">
				{props.children ? props.children : "Error fetching data, trying again..."}
			</p>
			<Watch color="red" height="30px" width="30px"></Watch>
		</div>
	);
};

export default ErrorTryingAgainMessage;
