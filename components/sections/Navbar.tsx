import Link from "next/link"
import { Button } from "../ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { icons, Menu } from "lucide-react"

export const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b  bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex justify-between items-center h-16 ml-7 mr-10">
            <div className="flex items-center gap-2">
                <Link href={'/'} className="flex items-center space-x-2">
                    <span className="font-serif text-2xl font-bold">
                        Arche<span className="gradient-text">Tech</span>
                    </span>
                </Link>  
            </div>
            <nav className="hidden md:flex items-center gap-6">
                <Link href={'#services'} className="text-sm font-medium hover:text-accent transition-colors">
                    Services
                </Link>
                <Link href={'#About'} className="text-sm font-medium hover:text-accent transition-colors">
                    About
                </Link>
                <Link href={'#Work'} className="text-sm font-medium hover:text-accent transition-colors">
                    Work
                </Link>
                <Link href={'#Contact'} className="text-sm font-medium hover:text-accent transition-colors">
                    Contact
                </Link>
                {/* <ModeToggle/> */}
                <Button>Get Started</Button>
            </nav>
            <div className="flex md:hidden items-center gap-4">
                {/* <ModeToggle/> */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant={"outline"} size={"icon"}>
                            <Menu className="h-5 w-5"></Menu>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right">
                        
                    </SheetContent>
                </Sheet>
            </div>
            
        </div>
    </header>
  )
}
