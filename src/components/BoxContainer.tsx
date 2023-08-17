import { useState } from "react";
import { ChildrenTypes } from "../types/childrenTypes";

const Box = ({ children }: ChildrenTypes) => {
	const [isOpen, setIsOpen] = useState(true);

	return (
		<div className="box">
			<button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
				{isOpen ? "–" : "+"}
			</button>
			{isOpen && children}
		</div>
	);
};
export default Box;
