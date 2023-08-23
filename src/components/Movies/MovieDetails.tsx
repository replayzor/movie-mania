type MovieDetailsProps = {
	selectedId: string;
	onClose: (id: string | null) => void;
};

function MovieDetails({ selectedId, onClose }: MovieDetailsProps) {
	return (
		<div className="details">
			<button className="btn-back" onClick={() => onClose(null)}>
				&larr;
			</button>
			{selectedId}
		</div>
	);
}
export default MovieDetails;
