import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export function SectionCards() {
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      
      {/* Motoristas Cadastrados */}
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Motoristas Ativos</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            327
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +6.4%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="flex gap-2 font-medium">
            Cadastro em alta <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Novos motoristas se cadastrando semanalmente
          </div>
        </CardFooter>
      </Card>

      {/* Veículos Cadastrados */}
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Veículos Registrados</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            514
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +9.1%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="flex gap-2 font-medium">
            Frota expandida <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Novos veículos vinculados ao sistema
          </div>
        </CardFooter>
      </Card>

      {/* Pedidos de Socorro em Andamento */}
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Pedidos de Socorro Ativos</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            42
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +4.8%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="flex gap-2 font-medium">
            Demanda constante <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Operações de atendimento em execução
          </div>
        </CardFooter>
      </Card>

      {/* Cancelamentos de Atendimento */}
      <Card className="@container/card">
        <CardHeader>
          <CardDescription>Atendimentos Cancelados</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            9
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingDown />
              -2.1%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="flex gap-2 font-medium">
            Redução de falhas <IconTrendingDown className="size-4" />
          </div>
          <div className="text-muted-foreground">
            Indicativo de maior eficiência nas respostas
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
