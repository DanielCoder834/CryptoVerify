import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function UserNav() {
  return (
    <Avatar className="h-9 w-9">
      <AvatarImage src="/placeholder.svg?height=36&width=36" alt="User avatar" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  )
}

