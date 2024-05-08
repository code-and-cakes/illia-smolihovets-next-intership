import React from "react";

type TaskPageProps = {
  children: React.ReactNode;
};

export default function TaskPage(props: TaskPageProps) {
  return <div className="min-w-fit">{props.children}</div>;
}
