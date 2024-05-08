import { CronTask } from './models/cronTask'

import { makeIaSearchUseCase } from '../use-cases/factories/make-ia-search'
import { makeGetAcessTokenUseCase } from '../use-cases/factories/make-get-acess-token-use-case'

const scheduleIaSearch = makeIaSearchUseCase()
export const iaSearch = new CronTask(async () => {
  const getAcessTokenUseCase = makeGetAcessTokenUseCase()
  await getAcessTokenUseCase.execute()
  const currentDate = new Date()
  const year = currentDate.getFullYear()
  const month = String(currentDate.getMonth() + 1).padStart(2, '0') // Month is 0-indexed
  const day = String(currentDate.getDate()).padStart(2, '0')
  const dataUltimaAlteracao = `${year}-${month}-${parseInt(day)}`
  await scheduleIaSearch.execute({data: dataUltimaAlteracao})
}, `0 ${process.env.MINUTOS_CRON} * * * *`)


iaSearch.start()


