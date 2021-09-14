import './App.css'
import Button from './Components/Button'

export default function App() {
  return (
    <div className='App'>
      Primary Green
      <div>
        <Button primaryGreen small children='Button' />
        <Button primaryGreen medium children='Button' />
        <Button primaryGreen large children='Button' />
      </div>
      Secondary Green
      <div>
        <Button secondaryGreen small children='Button' />
        <Button secondaryGreen medium children='Button' />
        <Button secondaryGreen large children='Button' />
      </div>
      Primary Grey
      <div>
        <Button primaryGrey small children='Button' />
        <Button primaryGrey medium children='Button' />
        <Button primaryGrey large children='Button' />
      </div>
      Secondary Grey
      <div>
        <Button secondaryGrey small children='Button' />
        <Button secondaryGrey medium children='Button' />
        <Button secondaryGrey large children='Button' />
      </div>
    </div>
  )
}
