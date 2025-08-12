
import { DataTable } from "@/components/data-table"
import { useState } from "react";

import ViewDialog from "./components/viewModal"

import { MoreHorizontal } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  Eye,
  LockKeyhole,
  Pencil,
  Trash2, 
} from "lucide-react"  

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

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

//alert
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import { Textarea } from "@/components/ui/textarea"

// avatar
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"




export default function Drivers() {
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const handleViewDriver = () => {

    setIsViewModalOpen(true)

  } 
  const handleEditDriver = () => {

    setIsEditModalOpen(true)

  } 

  const handleDeleteDriver = () => {

    setIsDeleteAlertOpen(true)

  } 

  const closeViewModal = () => {
    setIsViewModalOpen(false)
  }

  const closeEditModal = () => {
    setIsEditModalOpen(false)
  }

  const closeDeleteAlert = () => {
    setIsDeleteAlertOpen(false)
  }

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          
          <div className="px-4 lg:px-6 flex flex-wrap gap-4">
            <div className="flex-[2] min-w-[430px]">
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-4 h-[430px] flex flex-col">
                <div className="flex-1 overflow-y-auto">
                  <DataTable
                    className="flex-1 h-full"
                    columns={[
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
                    ]}
                    data={[
                      {
                        id: "728ed52f",
                        name: "José Alberto Mateus", 
                        email: "exemplo@gmail.com",
                        document: "Carta de Condução",
                        history: "antendido no dia 22"
                      },
                      {
                        id: "728ed52f",
                        name: "José Alberto Mateus",
                        email: "example@gmail.com",
                        document: "B.I",
                        history: "antendido no dia 22"
                      },
                      // ...
                      {
                        id: "728ed52f",
                        name: "José Alberto Mateus",
                        email: "example@gmail.com",
                        document: "Carta de Condução",
                        history: "antendido no dia 22"
                      },
                      // ...
                      {
                        id: "728ed52f",
                        name: "José Alberto Mateus",
                        email: "example@gmail.com",
                        document: "B.I",
                        history: "antendido no dia 22"
                      },
                      // ...
                      {
                        id: "728ed52f",
                        name: "José Alberto Mateus",
                        email: "example@gmail.com",
                        document: "Carta de Condução",
                        history: "antendido no dia 22"
                      },
                      // ...
                      {
                        id: "728ed52f",
                        name: "José Alberto Mateus",
                        email: "example@gmail.com",
                        document: "B.I",
                        history: "antendido no dia 22"
                      },
                      // ...
                      {
                        id: "728ed52f",
                        name: "José Alberto Mateus",
                        email: "example@gmail.com",
                        document: "B.I",
                        history: "antendido no dia 22"
                      },
                      // ...
                    ]}
                    page={1}
                    setPage={() => {}}
                    totalPages={10}
                    limit={5}
                    setLimit={() => {}}
                    filters={[]}
                  />
                <ViewDialog openModel = {isViewModalOpen} onOpenChangeModel={closeViewModal}/>
                <Dialog open = {isEditModalOpen} onOpenChange={closeEditModal}>
                  <form>
                    <DialogTrigger asChild>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px] bg-white dark:bg-gray-900">
                      <DialogHeader>
                        <DialogTitle>Editar Motorista</DialogTitle>
                        <DialogDescription>
                          Edite os dados do motorista aqui. Clique em atualizar quando terminar de preencher todos os campos
                        </DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4">
                        <div className="grid gap-3">
                          <Label htmlFor="name-1">Name</Label>
                          <Input type="text" id="name-1" name="name" defaultValue="José Alberto Mateus" />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="email-1">Email</Label>
                          <Input type="email" id="email-1" name="email" defaultValue="exemplo@gmial.com" />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="image-1">Imagem</Label>
                          <Input typeof="image" id="picture" type="file" />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="document-1">Documento</Label>
                          <Select>
                            <SelectTrigger className="w-sm">
                              <SelectValue placeholder="Seleciona o documento" />
                            </SelectTrigger>
                            <SelectContent className="bg-white dark:bg-gray-900">
                              <SelectGroup>
                                <SelectItem value="idCard">B.I</SelectItem>
                                <SelectItem value="driver-card">Carta de Condução</SelectItem>
                                <SelectItem value="other">Outro</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="document-1">Historico</Label>
                          <Textarea placeholder="No ultimo atendimento" />
                        </div>
                      </div>
                      <DialogFooter>
                        <DialogClose asChild>
                          <Button variant="outline">Cancelar</Button>
                        </DialogClose>
                        <Button type="submit">Atualizar</Button>
                      </DialogFooter>
                    </DialogContent>
                  </form>
                </Dialog>
                <AlertDialog open = {isDeleteAlertOpen} onOpenChange={closeDeleteAlert}>
                  <AlertDialogTrigger asChild>
                  </AlertDialogTrigger>
                  <AlertDialogContent className="bg-white dark:bg-gray-900">
                    <AlertDialogHeader>
                      <AlertDialogTitle>Tem certeza que quer eliminar este registro?</AlertDialogTitle>
                      <AlertDialogDescription>
                        Esta acção não poderá ser desfeita. Vai apagar permanentemente o seu registro dos nossos servidores.
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogCancel>Cancelar</AlertDialogCancel>
                      <AlertDialogAction>Continuar</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}