import UserList from './UserList';
import AssignmentHeader from "./AssignmentHeader.jsx";

function Assignment9A() {
  return (
      <div >
        <AssignmentHeader
          title="CS 81 – Assignment 9A: Build Your First React Component"
          description="This assignment demonstrates how to create clean, reusable components with props, layout, and modular design using React."
        />
        <UserList />
      </div>
  );
}

export default Assignment9A;
