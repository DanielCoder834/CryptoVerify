import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export function SupportTab() {
  return (
    <div className="rounded-lg border border-[#f1f2f6] p-6">
      <h2 className="text-lg font-medium mb-6">Contact Support</h2>
      <div className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Subject</label>
          <Input placeholder="Enter subject" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium">Message</label>
          <Textarea placeholder="How can we help you?" className="min-h-[150px]" />
        </div>
        <Button className="w-full bg-[#939ef3] hover:bg-[#7f63f1]">Send Message</Button>
      </div>
    </div>
  )
}

