import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@radix-ui/react-separator";

export default function Page() {
  let user = "John";
  return (
    <div>
      <h1 className="p-1 m-6 text-xl">{user}'s Dashboard</h1>
      <div>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          <div className="flex">
            <div className="rounded-xl bg-muted/50 w-[80%] pr-2">
              {/* <img src="user-card-display.svg" alt="" className="" />/ */}
              hi
            </div>
            <div className="rounded-xl bg-muted/50 w-[20%]">hi</div>

            {/* <Button className={"w-[85%]"} variant="outline">
              Add new Credit Card
            </Button> */}
          </div>

          <div className="aspect-video rounded-xl bg-muted/50"></div>
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
          <div className="aspect-video rounded-xl bg-muted/50" />
        </div>
      </div>
    </div>
  );
}
