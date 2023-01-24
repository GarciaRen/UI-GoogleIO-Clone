import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example(data) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center items-center rounded-md font-sans text-md font-medium text-w">
          {data?.title}
          {data?.button ? (
            <ChevronUpIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
          ) : (
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5"
              aria-hidden="true"
            />
          )}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-2 z-10 mt-1  w-44 origin-top-right rounded-xl bg-[#202124] shadow-lg border-2 border-white">
          <div className="py-3 flex-col ">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    "text-white",
                    "block px-4 py-2 text-md"
                  )}
                >
                  {data.val1}
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    "text-white",
                    "block px-4 py-2 text-md"
                  )}
                >
                  {data.val2}
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
