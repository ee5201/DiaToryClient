import { useRouter } from "next/router"
import { useRecoilState } from "recoil"
import { visitedPageState } from "../../../../commons/stores"



export const useMoveToPage =(path:string)=>()=>{

  const router = useRouter()
  const [visitedPage,setvisitedPage] = useRecoilState(visitedPageState)

  const onCLickMoveToPage= (path:string)=>()=>{
    setvisitedPage(path)
    void router.push(path)
  }
  return(
    onCLickMoveToPage
  )
}