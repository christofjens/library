import './App.css'
import Button from './Components/Button'

export default function App() {
  return (
    <div className='App'>
      <div>
        <Button primaryGreen small>
          primary green S
        </Button>
        <Button secondaryGreen small>
          secondary green S
        </Button>
        <Button primaryGrey small>
          primary grey S
        </Button>
        <Button secondaryGrey small>
          secondary grey S
        </Button>
      </div>
      <div>
        <Button primaryGreen medium>
          primary green M
        </Button>
        <Button secondaryGreen medium>
          secondary green M
        </Button>
        <Button primaryGrey medium>
          primary grey M
        </Button>
        <Button secondaryGrey medium>
          secondary grey M
        </Button>
      </div>
      <div>
        <Button primaryGreen large>
          primary green L
        </Button>
        <Button secondaryGreen large>
          secondary green L
        </Button>
        <Button primaryGrey large>
          primary grey L
        </Button>
        <Button secondaryGrey large>
          secondary grey L
        </Button>
      </div>
    </div>
  )
}
