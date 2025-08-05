
import { ChartBarInteractive } from "@/components/chart-bar-interactive"
import { ChartBarMixed } from "@/components/chart-bar-mixed"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"



export default function DashboardPage() {


  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <SectionCards />

          <div className="px-4 lg:px-6 flex-1">
            <ChartBarInteractive />
          </div>

          <div className="px-4 lg:px-6 flex flex-wrap gap-4">
            <div className="flex-1 min-w-[300px]">
              <ChartBarMixed />
            </div>
            <div className="flex-[2] min-w-[430px]">
              <div className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-4 h-[430px] flex flex-col">
                <div className="flex-1 overflow-y-auto">
                  <DataTable
                    className="flex-1 h-full"
                    columns={[ ]}
                    data={[]}
                    page={1}
                    setPage={() => {}}
                    totalPages={0}
                    limit={0}
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
