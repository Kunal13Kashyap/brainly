import './App.css'
import { Button } from './components/ui/Button'
import { PlusIcon, ShareIcon } from './icons'


function App() {

  return (
    <>
    <Button startIcon={<ShareIcon color='stroke-blue-800' size="md" />} variant='primary' size='md' text='Share Brain' url='https://share.google/9nd9wc6Yyz2iEC6mu' onClick={()=>{}}></Button>
    <Button startIcon={<PlusIcon color='stroke-green-800' size="md" />} variant='secondary' size='md' text='Add Content' url='https://share.google/9nd9wc6Yyz2iEC6mu' onClick={()=>{}}></Button>
    </>
  )
}

export default App