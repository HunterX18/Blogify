import "./create.css";

const Create = () => {
	return (
		<div className="create">
			<img
				className="createImg"
				src="https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?q=80&w=1373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
				alt="create_img"
			/>
			<form className="createForm">
				<div className="createFormGroup">
					<input
						className="createInput"
						autoFocus={true}
						type="text"
						placeholder="Title"
					/>
				</div>
				<div className="createFormGroup">
					<textarea
						placeholder="Tell your story..."
						type="text"
						className="createInput createText"
					></textarea>
				</div>
				<button className="createSubmit">Publish</button>
			</form>
		</div>
	);
};

export default Create;
