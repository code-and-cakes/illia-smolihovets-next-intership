export default function TaskComponent() {
  return (
    <div className="flex flex-row border-2 border-black">
      <input type="checkbox" className="m-1"></input>
      <div className="m-1">Priority</div>
      <div className="m-1">Status</div>
      <div className="m-1">Description</div>
      <div className="m-1">CreateDate</div>
      <div className="m-1">DateUpdate</div>
      <div className="m-1">AssignTo</div>
      <div className="m-1">FromProject</div>
    </div>
  );
}
