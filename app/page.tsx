import { Button } from "@/components/button/button"

export default function Home() {
  return (
    <div className="p-10 flex flex-col gap-6">

      <h1 className="text-2xl font-bold text-foreground">
        McKesson Design System
      </h1>

      <div>
        <p className="text-sm text-muted-foreground mb-3">Variants</p>
        <div className="flex gap-3 flex-wrap">
          <Button variant="default">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </div>
      </div>

      <div>
        <p className="text-sm text-muted-foreground mb-3">Sizes</p>
        <div className="flex gap-3 items-center flex-wrap">
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
        </div>
      </div>

    </div>
  )
}