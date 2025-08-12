//dialog
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

// avatar
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"


import { Button } from "@/components/ui/button"



export default function ViewDialog({openModel, onOpenChangeModel}:{openModel:boolean, onOpenChangeModel:() => void}) {

    return (

        <Dialog open = {openModel} onOpenChange={onOpenChangeModel}>
            <DialogTrigger asChild>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-white dark:bg-gray-900 bg-white dark:bg-gray-900">
                <DialogHeader>
                <DialogTitle>Motorista</DialogTitle>
                <DialogDescription>
                </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 ">
                <div className="flex gap-3">
                    <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>JA</AvatarFallback>
                    </Avatar>
                    <Label htmlFor="name-1">José Alberto Mateus</Label>
                </div>
                <div className="flex gap-3 border-s-2 border-red-600 px-3">
                    <p className="font-bold">
                    Email:
                    </p>
                    <p>
                    exemplo@gmail.com
                    </p>
                </div>
                <div className="flex gap-3 border-s-2 border-red-600 px-3">
                    <p className="font-bold">
                    Documento:
                    </p>
                    <p>
                    exemplo@gmail.com
                    </p>
                </div>
                <div className="flex gap-3 border-s-2 border-red-600 px-3">
                    <p className="font-bold">
                    Historico:
                    </p>
                    <p>
                    exemplo@gmail.com
                    </p>
                </div>
                </div>
                <DialogFooter>
                <Button type="submit">Exportar</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>

    )
}

