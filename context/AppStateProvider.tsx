import { AnyNsRecord } from 'dns'
import { createContext, useState } from 'react'

type ContextInterface = {
    refresh: any,
    setRefresh: any,
    file: any,
    setFile: any,
    filesAndFolders: any,
    setFilesAndFolders: any,
    selectedFolder: any,
    setSelectedFolder: any,
    currentFolder: any,
    setCurrentFolder: any,
    selectedItems: any,
    setSelectedItems: any
}
const AppStateContext = createContext<ContextInterface>({
  refresh: null,
  setRefresh: null,
  file: null,
  setFile: null,
  filesAndFolders: null,
  setFilesAndFolders: null,
  selectedFolder: null,
  setSelectedFolder: null,
  currentFolder: null,
  setCurrentFolder: null,
  selectedItems: null,
  setSelectedItems: null
})

const AppStateProvider = (props: any) => {
  const [refresh, setRefresh] = useState()
  const [file, setFile] = useState()
  const [filesAndFolders, setFilesAndFolders] = useState()
  const [selectedFolder, setSelectedFolder] = useState()
  const [currentFolder, setCurrentFolder] = useState()
  const [selectedItems, setSelectedItems] = useState()

  return (
    <AppStateContext.Provider
      value={{
        refresh,
        setRefresh,
        file,
        setFile,
        filesAndFolders,
        setFilesAndFolders,
        selectedFolder,
        setSelectedFolder,
        currentFolder,
        setCurrentFolder,
        selectedItems,
        setSelectedItems
      }}
    >
      {props.children}
    </AppStateContext.Provider>
  )
}

export { AppStateContext, AppStateProvider }
