import { Modal } from "antd"
import { useRouter } from "next/router"
import { useEffect } from "react"
import {  useRecoilValueLoadable } from "recoil"
import { restoreAccessTokenLoadable } from "../../../../commons/stores"
import { getAccessToken } from "../../../../commons/libraries/getAccessToken"

export const useAuth = ():void => {
  const router = useRouter()
  const  refreshtoken = useRecoilValueLoadable(restoreAccessTokenLoadable)


useEffect(()=>{
  void refreshtoken.toPromise().then((newaccessToken)=>{
    if(newaccessToken === undefined){
      alert('로그인 후 이용 가능 합니다.')
    void  router.push('/loginPage')

    }
  })

},[])

}