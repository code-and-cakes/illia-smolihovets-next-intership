import { cn } from "@/lib/utils";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { useState } from "react";

type ComoboxProjectsProps = {
  projects: any;
};

export default function ComoboxProjects(props: ComoboxProjectsProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(props.projects[1].project_name);

  const filteredProjects =
    query === ""
      ? props.projects
      : props.projects.filter((project: any) => {
          return project.project_name
            .toLowerCase()
            .includes(query.toLowerCase());
        });

  return (
    <div className="mx-auto w-52 py-5">
      <div className="pb-2 pl-2">Choose project:</div>
      <Combobox value={selected} onChange={(value) => setSelected(value)}>
        <div className="relative">
          <ComboboxInput
            className={cn(
              "w-full rounded-lg border-none bg-white/5 py-1.5 pl-3 pr-8 text-sm/6 text-white",
              "data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 focus:outline-none"
            )}
            displayValue={(project: any) => project?.project_name}
            onChange={(event) => setQuery(event.target.value)}
          />
          <ComboboxButton className="group absolute inset-y-0 right-0 z-20 px-2.5">
            <ChevronDownIcon className="size-4 group-data-[hover]:fill-white" />
          </ComboboxButton>
        </div>
        <Transition
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <ComboboxOptions
            anchor="bottom"
            className=" w-[var(--input-width)] rounded-xl border border-white/5 bg-linear-task p-1 [--anchor-gap:var(--spacing-1)] empty:hidden"
          >
            {filteredProjects.map((project: any) => (
              <ComboboxOption
                key={project.id}
                value={project}
                onClick={() => router.push(`/projects/${project.project_id}`)}
                className="group flex cursor-default select-none items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10"
              >
                <CheckIcon className="invisible size-4 text-white group-data-[selected]:visible" />
                <div className="text-sm/6 text-white">
                  {project?.project_name}
                </div>
              </ComboboxOption>
            ))}
          </ComboboxOptions>
        </Transition>
      </Combobox>
    </div>
  );
}
