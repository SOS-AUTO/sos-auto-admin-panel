
import { DataTable } from "@/components/data-table"

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
                        accessorKey: "actions",
                        header: "Acções",
                        cell: ({ row }) => {
                          return (
                            <div className="flex gap-2">
                      
                              <Dialog>
                                  <DialogTrigger asChild>
                                    <div className="text-gray-700 dark:text-gray-100 cursor-pointer">
                                      <Eye size={18} />
                                    </div>
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
                              <Dialog>
                                <form>
                                  <DialogTrigger asChild>
                                    <div className="text-gray-700 dark:text-gray-100 cursor-pointer">
                                      <Pencil size={18} />
                                    </div>
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
                              <div className="text-gray-700 dark:text-gray-100 cursor-pointer">
                                    <LockKeyhole size={18} />
                              </div>
                              <AlertDialog>
                                <AlertDialogTrigger asChild>
                                  <div className="text-red-600 dark:text-red-600 cursor-pointer">
                                    <Trash2 size={18} />
                                  </div>
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
                          )
                        }
                      }
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}