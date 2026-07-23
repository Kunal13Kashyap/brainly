import { Button } from "./components/Button"
import { PlusIcon } from "./icons/Plusicon"
import { ShareIcon } from "./icons/ShareIcon"
import { Card } from "./components/Card"

function App() {
  return(
    <div className="p-4 bg-gray-300 h-screen w-full">
      <div className="flex justify-end gap-4">
        <Button variant="primary" text="Add Content" startIcon={<PlusIcon/>} />
        <Button variant="secondary" text="Share Brain" startIcon={<ShareIcon/>} />
      </div>
      <div className="flex gap-4">
        <Card type="youtube" link="https://www.youtube.com/embed/BiIZz6TQtUo?si=C5PU8JLwFI0Aeaov" title="Family Secrets Horror Game is so Emotional"></Card>
        <Card type="spotify" link="https://open.spotify.com/embed/track/6bNB5gxFX6Q87DbQWb8OWZ?utm_source=generator&si=4b62a3980fc54205" title="Waka Waka" />
      </div>
    </div>
  )
}

export default App