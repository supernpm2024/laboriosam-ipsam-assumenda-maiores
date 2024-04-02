import { Button } from '../../buttonRefresh'

const getRandom = async () => Math.random()

export default async function Page() {
  const someProp = await getRandom()

  return (
    <dialog open>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div>
          <span>Modal Page</span>
          <span id="modal-random">{someProp}</span>
        </div>
        <Button />
      </div>
    </dialog>
  )
}
