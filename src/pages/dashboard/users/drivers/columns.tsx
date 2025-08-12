"use client"

import { MoreHorizontal } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// avatar
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"


import { Button } from "@/components/ui/button"



export const columns = [
  {
    accessorKey: "id",
    header: "ID",
    },
    {
    accessorKey: "driver",
    header: "Motorista",
    cell: ({ row }) => {
        return (
        <div className="flex gap-3 items-center">
            <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>JA</AvatarFallback>
            </Avatar>
            <div >
            <p>
                {row.original.name}
            </p>
            <p>
                {row.original.email}
            </p>
            </div>
        </div>
        )
    }
    
    },
    {
    accessorKey: "document",
    header: "Documento",
    },
    {
    accessorKey: "history",
    header: "Histórico",
    },
    {
    id: "actions",
    cell: ({ row }) => {
        return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Abrir Menu</span>
                <MoreHorizontal className="h-4 w-4" />
            </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white dark:bg-gray-900">
            <DropdownMenuLabel>Acções</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => {handleViewDriver()}}>Ver Motorista</DropdownMenuItem>
            <DropdownMenuItem onClick={() => {handleEditDriver()}}>Editar Motorista</DropdownMenuItem>
            <DropdownMenuItem>Bloquear Motorista</DropdownMenuItem>
            <DropdownMenuItem onClick={() => {handleDeleteDriver()}}>Deletar Motorista</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
        )
    },
    },
]