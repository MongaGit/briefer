import { APIDataSource } from '@/hooks/useDatasources'
import ExplorerTitle from './ExplorerTitle'
import { databaseImages } from '../DataSourcesList'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { ShapesIcon } from 'lucide-react'

interface Props {
  dataSource: APIDataSource
  onSelectSchema: (schemaName: string) => void
  onBack: () => void
}
export default function SchemaList(props: Props) {
  return (
    <div className="flex flex-col h-full">
      <ExplorerTitle
        title="Schema explorer"
        description="Choose a schema to explore its tables."
      />

      <div className="pt-4 flex flex-col h-full">
        <button
          className="relative flex px-4 py-2 text-xs font-medium border-y bg-gray-50 text-gray-600 items-center justify-between font-mono hover:bg-gray-100 group w-full"
          onClick={props.onBack}
        >
          <div className="flex gap-x-1.5 items-center">
            <ChevronLeftIcon className="h-3 w-3 text-gray-500 group-hover:text-gray-700" />
            <h4>{props.dataSource.dataSource.data.name}</h4>
          </div>

          <img
            src={databaseImages(props.dataSource.dataSource.type)}
            alt=""
            className="h-4 w-4 group-hover:grayscale-[50%]"
          />
        </button>

        <div className="flex-grow text-xs text-gray-500 font-sans font-medium overflow-y-auto">
          <ul className="h-full">
            {Object.keys(props.dataSource.structure.schemas).map(
              (schemaName) => {
                return (
                  <li
                    key={schemaName}
                    className="px-4 xl:px-6 py-2.5 border-b border-gray-200 cursor-pointer hover:bg-gray-50 flex items-center justify-between"
                    onClick={() => props.onSelectSchema(schemaName)}
                  >
                    <div className="flex gap-x-1.5 items-center font-mono">
                      <ShapesIcon className="text-gray-400 h-4 w-4" />
                      <h4>{schemaName}</h4>
                    </div>
                    <ChevronRightIcon className="h-3 w-3 text-gray-500" />
                  </li>
                )
              }
            )}
          </ul>
        </div>
      </div>
    </div>
  )
}
