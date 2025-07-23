function AssignmentHeader({ title, description }) {
  return (
    <div className="assignment-header">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

export default AssignmentHeader;
