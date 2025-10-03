import { useState } from "react"
import { Button } from "@/components/ui/button"

const GREETINGS = [
  "Hello!",
  "Hi there!",
  "Hey!",
  "Greetings!",
  "Welcome!",
  "Good day!",
  "Howdy!",
  "Salutations!",
  "What's up?",
  "Nice to see you!",
  "Hola!",
  "Bonjour!",
  "Ciao!",
  "Namaste!",
  "Konnichiwa!",
]

const Index = () => {
  const [greeting, setGreeting] = useState<string>("")

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * GREETINGS.length)
    setGreeting(GREETINGS[randomIndex])
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-8">
        <Button onClick={handleClick} size="lg">
          Get Greeting
        </Button>
        {greeting && (
          <p className="text-4xl font-bold text-foreground animate-in fade-in duration-300">
            {greeting}
          </p>
        )}
      </div>
    </div>
  )
}

export default Index