"use client";

import { Button } from "@/components/ui/button";
import useStore from "@/lib/store/useStore";
import { userStore } from "@/lib/store/user";
import { ScrollArea } from "@radix-ui/react-scroll-area";

export function HomeList() {
  const usernames = useStore(userStore, (state) => state.usernames);
  const { removeUsername } = userStore();

  const handleClickMinus = (username: string) => {
    removeUsername(username);
  };

  return (
    <>
      <ScrollArea className="h-30 flex flex-col">
        <p className="text-sm text-muted-foreground pb-2">
          username will be written here. Once username filled, test reload
          please.
        </p>
        {usernames?.map((username) => (
          <div className="flex" key={username}>
            <div className="rounded-md border px-4 py-2 font-mono text-sm shadow-sm">
              {username}
            </div>
            <Button variant="ghost" onClick={() => handleClickMinus(username)}>
              -
            </Button>
          </div>
        ))}
      </ScrollArea>
    </>
  );
}
